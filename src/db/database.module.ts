import { DatabaseService } from "./database.service";
import { Module } from "@nestjs/common";

@Module({
  controllers: [],
  providers: [DatabaseService],
  exports: [
    DatabaseService
  ]
})
export class DatabaseModule {}