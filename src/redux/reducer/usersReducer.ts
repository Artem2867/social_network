import { UsersApi } from "../../api/authUsersApi";
import { UserStateType } from "../../utilits/MyType";
const FOLLOWED = 'FOLLOWED';
const UNFOLLOWED = 'UNFOLLOWED';
const GET_USERS = 'GET_USERS';
const GETMOREUSERS = 'GET_MORE_USERS';



const usersState: UserStateType = {
    users: [],
    isLoading: true,    
    page: 1,
    totalCount: 0,
}


const usersReducer = (state = usersState, action: any): UserStateType => {
    switch (action.type) {
        case FOLLOWED: 
            return {
                ...state,
                users: [...state.users.map((u: any)  => {
                    return {
                        ...u,
                        followed: action.id === u.id? action.follow: u.followed
                    }
                })] 
            }
        case UNFOLLOWED:
            return {
                ...state,
                users: [...state.users.map((u: any) => {
                    return {
                        ...u,
                        followed: action.follow
                    }
                })] 
            }
        case GET_USERS:
            if(state.users.length === 0 || state.users[9].id === action.users.items[9].id) {
                return {
                    ...state, 
                    users: action.users.items,
                    isLoading: false,
                    page: 1,
                    totalCount: action.users.totalCount,
                }
            } 
            return {
                ...state,
                users: [...state.users, ...action.users.items],
                isLoading: false,
            }
        case GETMOREUSERS: 
            return {
                ...state,
                page: action.page
            }
        default: 
            return state
    }   
}

export const followedUser = (follow: boolean, id: number) => { return {type: FOLLOWED, follow, id} }

export const unfollowedUser = (id: number) => { return {type: UNFOLLOWED, id}}

export const getUsers = (users: any) => {return {type: GET_USERS, users}}

export const getMoreUsers = (page: number) => {return {type: GETMOREUSERS, page}}

export const getUsersThunk = () => { return async (dispatch: any) => {
        let response:any = await UsersApi.getUsersApi();
        dispatch(getUsers(response))
    }
}
export const getMoreUsersThunk = () => {
    return async(dispatch:any) => {
        const page = usersState.page + 1
        dispatch(getMoreUsers(page))
        let response: any = await UsersApi.getMoreUsers(page);
        dispatch(getUsers(response))
    }
}
export const getFollowUsersThunk = (id:number) => {
    return async (dispatch: any) => {
        let response: any = await UsersApi.getFollowUsers(id);
        dispatch(followedUser(response, id))
    }
}
export const followUserThunk = (id: number) => {
    return async(dispatch:any) => {
        await UsersApi.followUser(id)
        dispatch(getFollowUsersThunk(id))
    }
}
export const unfollowUserThunk = (id: number) => {
    return async (dispatch:any) => {
        await UsersApi.unfollowUser(id)
        dispatch(getFollowUsersThunk(id))
    }
}


export default usersReducer;
