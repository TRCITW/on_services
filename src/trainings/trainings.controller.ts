import {Controller, Get, Query} from '@nestjs/common';
import { TrainingsService } from './trainings.service';
import {ApiTags} from "@nestjs/swagger";

@ApiTags("Trainings Controller")
@Controller('trainings')
export class TrainingsController {

  constructor(private readonly trainingsService: TrainingsService) {
  }

  @Get("/fetch_trainings")
  fetchTrainings() {
    return this.trainingsService.fetchTrainings()
  }

  @Get("/fetch_training_videos")
  fetchTrainingVideos(
      @Query("training_id") trainingId: number
  ) {
    return this.trainingsService.fetchTrainingVideos(trainingId)
  }

}
