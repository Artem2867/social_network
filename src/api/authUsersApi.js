import * as axios from "axios"





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
                .then(response => {
                    return response.data
                })
    },
    getMoreUsers(page) {
        return instance 
                .get(`users?count=10&page=${page}`)
                .then(response => {
                  return  response.data
                }) 
    },
    getFollowUsers(id) {
        return instance     
                    .get(`follow/${id}`)
                    .then(response => {
                        return response.data
                    })
    },
    followUser(id) {
        return instance     
                    .post(`follow/${id}`)
                    .then(response => {
                        return response
                    })
    },
    unfollowUser(id) {
        return instance
                .delete(`follow/${id}`)
                .then(response => {})
    }
}
