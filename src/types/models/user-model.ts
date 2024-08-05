export interface UserModel {
    id: number
    createdAt?: Date
    name?: string
    birthday?: Date
    sex?: string
    goal?: string
    username?: string
    waternorm?: number
    weight?: number
    bodyType?: string
    isSignUpCompleted?: boolean
    isBanned?: boolean
}