import axios, { AxiosResponse } from "axios"
import { LoginFormDataType } from "../utilits/MyType"

const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        'API-KEY': 'd698822b-804b-426e-88fb-49ddad4c012a'
    }
})


export const UsersApi = {
    getUsersApi()  {
        return instance
                .get('users?count=10&page=1')
                .then((response: AxiosResponse) => {
                    return response.data
                })
    },
    getMoreUsers(page: number) {
        return instance 
                .get(`users?count=10&page=${page}`)
                .then(response => {
                  return  response.data
                }) 
    },
    getFollowUsers(id:number) {
        return instance     
                    .get(`follow/${id}`)
                    .then(response => {
                        return response.data
                    })
    },
    followUser(id:number) {
        return instance     
                    .post(`follow/${id}`)
                    .then(response => {
                        return response
                    })
    },
    unfollowUser(id:number) {
        return instance
                .delete(`follow/${id}`)
                .then(response => {})
    }
}



export const ProfileApi = {
    getProfileInfo(userId:string) {
        return instance
                .get(`profile/${userId}`)
                .then(responce => {
                    return responce
                })
    }
}

export const HeaderApi = {
    getAuthMe() {
        return instance
                .get(`auth/me`)
                .then(response => {
                  return response.data;
                })
    }
}



export const LoginApi = {
    LogIn(formData: LoginFormDataType) {
        const{email,password,rememberMe} = formData
        return instance
                .post('auth/login',{
                    email, password, rememberMe
                })
                .then(response => {
                    return response
                })
    },
    LogOut() {
        return instance
                .post('auth/logout')
                .then(response => {
                    return response.data
                })
    }
}