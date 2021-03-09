import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from './header'
import { isLogOutThunk, getAuthMeThunk } from '../../redux/reducer/authReducer';
import { AppState } from '../../redux/redux-store';

type PropsType = {
    id: number | null
    login: string | null
    email: string | null
    resultCode: number | null
    getAuthMeThunk: () => void
    isLogOutThunk: () => void
}

const HeaderApi: React.FC<PropsType> = ({id, login, email, resultCode, getAuthMeThunk, isLogOutThunk}) => {    
    useEffect(() => {
        getAuthMeThunk()      
    }, [getAuthMeThunk]) 
    
    const LogOut = () => {
        isLogOutThunk()
    }

    return (
        <Header
                id={id}
                login={login}
                email={email}
                resultCode={resultCode}
                logOut={LogOut}/>
    )
}

const mapStateToProps = (state: AppState) => {
    return {
        id: state.authMe.data.id,
        login: state.authMe.data.login,
        email: state.authMe.data.email,
        resultCode: state.authMe.resultCode
    }
}


export default connect(mapStateToProps, {isLogOutThunk, getAuthMeThunk}) (HeaderApi)