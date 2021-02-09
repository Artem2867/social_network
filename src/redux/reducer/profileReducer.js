import { ProfileApi } from "../../api/authUsersApi";

const ADDNEWPOST = 'ADD-NEW-POST';
const TEXTNEWPOST = 'TEXT-NEW-POST';
const GETPROFILEINFO = 'GET_PROFILE_INFO'


const profilePage = {
        ProfileInfo: {
            userId: null,
            fullName: null,
            aboutMe: null,
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
                small: null,
                large: null
              }
        },
        Myposts: [
            {id: 1, post: 'My first post',likeCount: 0},
            {id: 2, post: 'My second post',likeCount: 0},
            {id: 3, post: 'My third post',likeCount: 0},
            {id: 4, post: 'My fourth post',likeCount: 0},
          ],
        TextNewPost: '',
}

const profileReducer = (state = profilePage, action) => {

    switch(action.type) {
        case 'ADD-NEW-POST': 
            let TextNewPost = state.TextNewPost;
            return {
                ...state,
                TextNewPost: "",
                Myposts: [...state.Myposts, {
                    id: 8,
                    post: TextNewPost
                }]
            }
        case 'TEXT-NEW-POST': 
            return {
                ...state,
                TextNewPost: action.text
            }
        case 'GET_PROFILE_INFO': {
            debugger;
            return {
                ...state,
                ProfileInfo: {...state.ProfileInfo,
                    userId: action.data.data.userId,
                    fullName: action.data.data.fullName,
                    aboutMe: action.data.data.aboutMe,
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

export const addNewPost = () => {
    return {
        type: ADDNEWPOST
    }
};

export const textNewPost = (text) => {
   return  {
       type: TEXTNEWPOST,
       text: text,
   }
}
export const getProfileInfo = (data) => {
    return {
        type: GETPROFILEINFO,
        data
    }
}
export const getProfileInfoThunk = (userId) => {
    return (dispatch) => {
        ProfileApi.getProfileInfo(userId) 
                    .then (responce => {
                        dispatch(getProfileInfo(responce))
                    })
    }
}

export default profileReducer;