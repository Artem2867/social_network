import { Action } from "redux"
import { ThunkAction } from "redux-thunk"
import { HeaderApi, LoginApi } from "../../api/authUsersApi"
import { AuthMeDataType, AuthStateType, LoginFormDataType } from "../../utilits/MyType"
import { AppState } from "../redux-store"

const GETAUTHME: string = 'GET_AUTH_ME'


const authState: AuthStateType = {
    data: {
        id: null,
        login: null,
        email: null 
    },
    resultCode: 1
}
const  authReducer = (state:AuthStateType = authState, action: GetAuthMeActionType): AuthStateType => {
    switch(action.type) {
        case GETAUTHME: 
            return {
                ...state,
                data: { 
                    ...state.data,
                    id: action.data.id,
                    login: action.data.login,
                    email: action.data.email,
                },
                resultCode: action.resultCode
            }
        default: 
            return state
    }
}

type GetAuthMeActionType = {
    type: typeof GETAUTHME
    data: AuthMeDataType
    resultCode: number
}

export const getAuthMe = (data: AuthMeDataType, resultCode: number): GetAuthMeActionType => ({
        type: GETAUTHME,
        data,
        resultCode
    })

export const getAuthMeThunk = (): ThunkAction<void, AppState, unknown, Action<any>> => {
    return async (dispatch) => {
        let response: AuthStateType = await HeaderApi.getAuthMe()
        dispatch(getAuthMe(response.data, response.resultCode))
    }
}

export const isLoginThunk = (formData: LoginFormDataType): ThunkAction<void, AppState, unknown, Action<LoginFormDataType>> => {
    return async (dispatch) => {
        let response =  await LoginApi.LogIn(formData)
        if(response.data.resultCode === 0) {
            dispatch(getAuthMeThunk())
        }
    }
}

export const isLogOutThunk = (): ThunkAction<void, AppState, unknown, Action<any>> => {
    return async (dispatch) => {
        await LoginApi.LogOut()
        dispatch(getAuthMeThunk())
    }
}

export default authReducer;