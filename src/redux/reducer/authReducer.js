const GETAUTHME = 'GET_AUTH_ME'

const authState = {
    id: null,
    login: null,
    email: null,
    resultCode: 1
}


 const  authReducer = (state = authState, action) => {
    switch(action.type) {
        case 'GET_AUTH_ME': 
            return {
                ...state,
                id: action.data.id,
                login: action.data.login,
                email: action.data.email,
                resultCode: action.resultCode
            }
        default: 
            return state
    }
}



export const getAuthMe = (data, resultCode) => {
    return {
        type: GETAUTHME,
        data,
        resultCode
    }
}

export default authReducer;