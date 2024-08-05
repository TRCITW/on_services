import {MediaModel} from "./media-model";

export interface PublicationModel {
    id: number
    createdAt?: Date
    type?: string
    text?: string
    previewText?: string
    title?: string
    authorName?: string
    previewMediaId?: number
    isPopular?: boolean

    media?: MediaModel
}