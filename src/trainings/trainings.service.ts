import { Injectable } from '@nestjs/common';
import {DatabaseService} from "../db/database.service";
import {TrainingVideoModel} from "../types/models/training-video-model";
import {TrainingModel} from "../types/models/training-model";

@Injectable()
export class TrainingsService {

    constructor(private readonly database: DatabaseService) {
    }

    async fetchTrainings(): Promise<TrainingModel[]> {
        const res = await this.database.trainings.findMany({
            include: {
                trainingsToVideos: {
                    include: {
                        trainingVideo: {
                            include: {
                                media: true
                            }
                        }
                    }
                }
            }
        })
        const mapped = res.map(m => ({
            ...m,
            trainingsToVideos: undefined,
            videos: m.trainingsToVideos.map(t => t.trainingVideo)
        }))
        return mapped as TrainingModel[]
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
