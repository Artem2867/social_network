import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { isLoginThunk } from '../../redux/reducer/authReducer';
import { AppState } from '../../redux/redux-store';
import Login from './login'

type PropsType = {
    resultCode: number | null
    id: number | null
    userId: number | null
    isLoginThunk: (formData: any ) => void
}

const LoginContainer: React.FC<PropsType> = ({resultCode, id, userId, isLoginThunk}) => {

    const isLogin = (formData: any) => {
        isLoginThunk(formData)
    }

    const isLoginOver = () => {
        if (resultCode === 0) {
           return <Redirect to={`/profile/${userId || id}`}/>
        }
    }
    
    return (
        <div>
            {isLoginOver()}
            <Login
                login={isLogin}/>

        </div>
    )
}

const mapStateToProps = (state: AppState) => {
    return {
        resultCode: state.authMe.resultCode,
        id: state.authMe.data.id,
        userId: state.profilePage.ProfileInfo.userId
    }
}




export default connect(mapStateToProps, { isLoginThunk}) (LoginContainer)