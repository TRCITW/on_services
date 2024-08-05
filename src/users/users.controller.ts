import {Body, Controller, Get, Put, UseGuards} from '@nestjs/common';
import { UsersService } from './users.service';
import {JwtAuthGuard} from "../auth/jwt-auth-guard";
import {UpdateUserDto} from "../types/dto/user/update-user-dto";
import {ApiTags} from "@nestjs/swagger";

@ApiTags("Users Controller")
@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService) {
  }

  @UseGuards(JwtAuthGuard)
  @Get('/fetch_user')
  fetchUserInfo() {
    return this.usersService.fetchUserInfo()
  }

  @UseGuards(JwtAuthGuard)
  @Put('/update_user')
  updateUserInfo(@Body() dto: UpdateUserDto) {
    return this.usersService.updateUserInfo(dto)
  }
}
