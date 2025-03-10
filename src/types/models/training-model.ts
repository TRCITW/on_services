import {TrainingVideoModel} from "./training-video-model";

export interface TrainingModel {
    id: number
    title?: string
    imageUrl?: string
    durationInMinutes?: number
    videoCount?: number
    type?: string

    videos?: TrainingVideoModel[]
}