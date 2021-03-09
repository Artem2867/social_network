import { ProfileApi } from "../../api/authUsersApi";
import { ProfilePageType, ProfileInfoType } from "../../utilits/MyType";

const ADDNEWPOST:string = 'ADD-NEW-POST';
const TEXTNEWPOST:string = 'TEXT-NEW-POST';
const GETPROFILEINFO:string = 'GET_PROFILE_INFO'

const profilePage: ProfilePageType = {
        ProfileInfo: {
            aboutMe: null,
            userId: null,
            fullName: null,
            lookingForAJob: null,
            lookingForAJobDescription: null,
            contacts: {
                facebook: null,
                website: null,
                vk: null,
                twitter: null,
                instagram: null,
                youtube: null,
                github: null,
                mainLink: null
            },
            photos: {
                small: undefined,
                large: undefined
            },
        },
        Myposts: [
            {id: 1, post: 'My first post',likeCount: 0},
            {id: 2, post: 'My second post',likeCount: 0},
            {id: 3, post: 'My third post',likeCount: 0},
            {id: 4, post: 'My fourth post',likeCount: 0},
          ],
        TextNewPost: '',
}

const profileReducer = (state: ProfilePageType = profilePage, action: any): ProfilePageType => {

    switch(action.type) {
        case ADDNEWPOST: 
            let TextNewPost = state.TextNewPost;
            return {
                ...state,
                TextNewPost: "",
                Myposts: [...state.Myposts, {
                    id: 8,
                    post: TextNewPost,
                    likeCount: null
                }]
            }
        case TEXTNEWPOST: 
            return {
                ...state,
                TextNewPost: action.text
            }
        case GETPROFILEINFO: {
            return {
                ...state,
                ProfileInfo: {...state.ProfileInfo,
                    aboutMe: action.data.data.aboutMe, 
                    userId: action.data.data.userId,
                    fullName: action.data.data.fullName,
                    lookingForAJob: action.data.data.lookingForAJob,
                    lookingForAJobDescription: action.data.data.lookingForAJobDescription,
                    contacts: { 
                        ...state.ProfileInfo.contacts,
                        facebook: action.data.data.contacts,
                        website: action.data.data.contacts.website,
                        vk: action.data.data.contacts.vk,
                        twitter: action.data.data.contacts.twitter,
                        instagram: action.data.data.contacts.instagram,
                        youtube: action.data.data.contacts.youtube,
                        github: action.data.data.contacts.github,
                        mainLink: action.data.data.contacts.mainLink
                    },
                    photos: {
                        ...state.ProfileInfo.photos,
                        small: action.data.data.photos.small,
                        large: action.data.data.photos.large
                    }
                }
            }
        }
        default:
            return state
    }
}

type addNewPostActionType = {
    type: typeof ADDNEWPOST
}
export const addNewPost = (): addNewPostActionType => ({type: ADDNEWPOST});

type textNewPostActionType = {
    type: typeof TEXTNEWPOST
    text: string
}
export const textNewPost = (text:string): textNewPostActionType => ({
       type: TEXTNEWPOST,
       text,
   }
)

type GetProfileInfoActionType = {
    type: typeof GETPROFILEINFO
    data: ProfileInfoType
}
export const getProfileInfo = (data:ProfileInfoType): GetProfileInfoActionType => ({
        type: GETPROFILEINFO,
        data
    })

export const getProfileInfoThunk = (userId:string) => {
    return  async (dispatch:any) => {
        let response: any  = await ProfileApi.getProfileInfo(userId) 
        dispatch(getProfileInfo(response))
    }
}

export default profileReducer;