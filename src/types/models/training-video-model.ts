import {MediaModel} from "./media-model";

export interface TrainingVideoModel {
    id: number
    createdAt?: Date
    title?: string
    secondTitle?: string
    description?: string
    estimationTime?: number
    videoId?: number

    video?: MediaModel
}