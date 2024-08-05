import { Module } from '@nestjs/common';
import { PublicationsService } from './publications.service';
import { PublicationsController } from './publications.controller';
import {DatabaseModule} from "../db/database.module";

@Module({
  controllers: [PublicationsController],
  providers: [PublicationsService],
  imports: [

    DatabaseModule

  ]
})
export class PublicationsModule {}
