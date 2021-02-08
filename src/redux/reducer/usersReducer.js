import { UsersApi } from "../../api/authUsersApi";
const FOLLOWED = 'FOLLOWED';
const UNFOLLOWED = 'UNFOLLOWED';
const GET_USERS = 'GET_USERS';
const GETMOREUSERS = 'GET_MORE_USERS';



const usersState = {
    users: [],
    isLoading: true,    
    page: 1,
    totalCount: null,
}


const usersReducer = (state = usersState, action) => {
    switch (action.type) {
        case 'FOLLOWED': 
            return {
                ...state,
                users: [...state.users.map(u => {
                    return {
                        ...u,
                        followed: action.id === u.id? action.follow: u.followed
                    }
                })] 
            }
        case 'UNFOLLOWED':
            return {
                ...state,
                users: [...state.users.map(u => {
                    return {
                        ...u,
                        followed: action.follow
                    }
                })] 
            }
        case 'GET_USERS':
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
        case 'GET_MORE_USERS': 
            return {
                ...state,
                page: action.page
            }
        default: 
            return state
    }   
}

export const followedUser = (follow, id) => { return {type: FOLLOWED, follow, id} }

export const unfollowedUser = (id) => { return {type: UNFOLLOWED, id: id}}

export const getUsers = (users) => {return {type: GET_USERS, users: users}}

export const getMoreUsers = (page) => {return {type: GETMOREUSERS, page}}

export const getUsersThunk = () => { return (dispatch) => {
        UsersApi.getUsersApi().then(response => {
            dispatch(getUsers(response))
        })
    }
}
export const getMoreUsersThunk = () => {
    return (dispatch) => {
        const page = usersState.page + 1
        dispatch(getMoreUsers(page))
        UsersApi.getMoreUsers(page).then(response => {
            dispatch(getUsers(response))
        })
    }
}
export const getFollowUsersThunk = (id) => {
    return (dispatch) => {
        UsersApi.getFollowUsers(id)
                    .then(response => {
                        dispatch(followedUser(response, id))
                    })
    }
}
export const followUserThunk = (id) => {
    return (dispatch) => {
        UsersApi.followUser(id)
                .then(response => {
                    dispatch(getFollowUsersThunk(id))
                })
    }
}
export const unfollowUserThunk = (id) => {
    return (dispatch) => {
        UsersApi.unfollowUser(id)
                .then(response => {
                    dispatch(getFollowUsersThunk(id))
                })
    }
}


export default usersReducer;
