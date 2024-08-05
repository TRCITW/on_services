import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {AuthModule} from "../auth/auth.module";
import {DatabaseModule} from "../db/database.module";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [

    AuthModule,

    DatabaseModule

  ]
})
export class UsersModule {}
