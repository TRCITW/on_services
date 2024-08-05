import {HttpException, HttpStatus, Inject, Injectable, Scope, UnauthorizedException} from '@nestjs/common';
import {DatabaseService} from "../db/database.service";
import {UserModel} from "../types/models/user-model";
import {Request} from "express";
import {REQUEST} from "@nestjs/core";
import {UpdateUserDto} from "../types/dto/user/update-user-dto";

@Injectable({scope: Scope.REQUEST})
export class UsersService {

    constructor(private readonly database: DatabaseService,
                @Inject(REQUEST) private readonly request: Request) {

    }

    async fetchUserInfo(): Promise<UserModel> {
        const userID = this.checkAuthAndReturnUserID()
        const user = await this.database.users.findFirst({
            where: {
                id: userID
            }
        })
        if (!user) throw new HttpException('Не найдено', HttpStatus.BAD_REQUEST)
        return user
    }

    async updateUserInfo(dto: UpdateUserDto): Promise<UserModel> {
        const userID = this.checkAuthAndReturnUserID()
        const user = await this.database.users.update({
            where: {
                id: userID
            },
            data: {
                name: dto.name,
                birthday: dto.birthday,
                // sex: dto.sex,
                // goal: dto.goal,
                waternorm: dto.waternorm,
                weight: dto.weight,
                // bodyType: dto.bodyType
            }
        })
        return user as UserModel
    }

    private checkAuthAndReturnUserID(): number {
        const userID = this.request.body.userID
        if (!userID) throw new UnauthorizedException()
        return userID
    }
}
