import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { AppState } from '../redux/redux-store';

const mapStateToProps = (state: AppState) => {
    return {
        login: state.authMe.resultCode
    }
} 
type PropsType = {
    login: number
}

const authRedirectHoc = (Component: any) => {
    let authRedirectConteinerComponent: FC<PropsType> = (props) => {
        if (props.login === 1) {
            return <Redirect to='/login'/>
        }
        return <Component {...props}/>
    } 
    
    const AuthRedirect = connect(mapStateToProps) (authRedirectConteinerComponent)

    return AuthRedirect
}



export default authRedirectHoc