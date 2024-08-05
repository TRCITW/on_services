import { Module } from '@nestjs/common';
import { TrainingsService } from './trainings.service';
import { TrainingsController } from './trainings.controller';
import {DatabaseModule} from "../db/database.module";

@Module({
  controllers: [TrainingsController],
  providers: [TrainingsService],
  imports: [

    DatabaseModule

  ]
})
export class TrainingsModule {}
