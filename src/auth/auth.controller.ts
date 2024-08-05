import {Controller, Post, Query} from '@nestjs/common';
import { AuthService } from './auth.service';
import {ApiTags} from "@nestjs/swagger";

@ApiTags("Auth Controller")
@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) {}

  @Post('/auth_via_apple')
  authViaApple(
      @Query('apple_user_id') appleUserId: string,
      @Query('apple_email') appleEmail: string,
      @Query('is_email_hidden') isEmailHidden: boolean,
      @Query('name') name: string,
  ) {
    return this.authService.authViaApple(appleUserId, appleEmail, isEmailHidden, name)
  }
}
