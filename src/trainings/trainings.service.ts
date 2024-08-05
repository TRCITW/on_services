import { Injectable } from '@nestjs/common';
import {DatabaseService} from "../db/database.service";
import {TrainingVideoModel} from "../types/models/training-video-model";

@Injectable()
export class TrainingsService {

    constructor(private readonly database: DatabaseService) {
    }

    async fetchTrainings(): Promise<TrainingVideoModel[]> {
        const res = await this.database.trainings.findMany()
        return res as TrainingVideoModel[]
    }

    async fetchTrainingVideos(trainingId: number): Promise<TrainingVideoModel[]> {
        const res = await this.database.trainingsToVideos.findMany({
            where: {
                trainingId: trainingId
            },
            include: {
                trainingVideo: true
            }
        })
        const mapped = res.map(m => ({
            ...m.trainingVideo
        }))
        return mapped as TrainingVideoModel[]
    }

}
