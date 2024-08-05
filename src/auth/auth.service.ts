import {Injectable} from '@nestjs/common';
import {DatabaseService} from "../db/database.service";
import {AuthSuccessDto} from "../types/dto/auth-success-dto";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {

    constructor(private readonly database: DatabaseService,
                private jwtService: JwtService) {
    }

    async authViaApple(appleUserId: string, appleEmail: string, isEmailHidden?: boolean, name?: string): Promise<AuthSuccessDto> {
        const appleCreds = await this.database.appleAuth.findFirst({
            where: { appleUserId },
            include: {
                user: true
            }
        })
        if (appleCreds) {
            return this.generateToken(appleCreds.appleEmail, appleCreds.userId)
        } else {
            const user = await this.database.users.create({
                data: {
                    name: name
                }
            })
            const newCreds = await this.database.appleAuth.create({
                data: {
                    appleEmail: appleEmail,
                    appleUserId: appleUserId,
                    isEmailHidden: isEmailHidden,
                    userId: user.id,
                }
            })
            return this.generateToken(newCreds.appleEmail, newCreds.userId)
        }
    }

    private generateToken(email: string, id: number): AuthSuccessDto {
        const payload = {id: id, email: email}
        const token: string = this.jwtService.sign(payload)
        return {
            token: token
        }
    }

}
