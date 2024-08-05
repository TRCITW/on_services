import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import { TrainingsModule } from './trainings/trainings.module';
import {DatabaseModule} from "./db/database.module";
import { PublicationsModule } from './publications/publications.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  controllers: [],
  providers: [],
  imports: [

    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
    }),

    DatabaseModule,

    TrainingsModule,

    PublicationsModule,

    AuthModule,

    UsersModule
  ],
})
export class AppModule {}
