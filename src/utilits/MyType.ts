export type MessageArrType = {
    id: number,
    message: string | null
}

export type DialogsArrType = {
    id: number,
    name: string | null
}

export type DialogsPageType = {
    Message: Array<MessageArrType>
    dialogArr: Array<DialogsArrType>
    NewMassage: string
}

export type ContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}
export type PhotosType = {
    small?: string,
    large?: string
}
export type ProfileInfoType = {
    aboutMe: string | null
    userId: number | null,
    fullName: string | null,
    lookingForAJob: boolean | null
    lookingForAJobDescription: string | null
    contacts: ContactsType,
    photos: PhotosType
}
export type ProfilePageType = {
    ProfileInfo: ProfileInfoType
    Myposts: Array<MypostType>
    TextNewPost: string
}
export type MypostType = {
    id: number | null
    post: string | null
    likeCount: number | null
}

export type UserType = {
    id: number | null
    name: string | null
    status: string | null
    photos: PhotosType
    followed: boolean | null
}

export type UserStateType = {
    users: Array<UserType>
    isLoading: boolean    
    page: number
    totalCount: number | null
}

export type AuthMeDataType = {
    id: number | null,
    login: string |null,
    email: string | null,
}

export type AuthStateType = {
    data: AuthMeDataType
    resultCode: number
}

export type LoginFormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

