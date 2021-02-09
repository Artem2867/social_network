import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

const mapStateToProps = (state) => {
    return {
        login: state.authMe.resultCode
    }
} 

const authRedirectHoc = (Component) => {
    let authRedirectConteinerComponent = (props) => {
        if (props.login === 1) {
            return <Redirect to='/login'/>
        }
        return <Component {...props}/>
    } 
    
    const AuthRedirect = connect(mapStateToProps) (authRedirectConteinerComponent)

    return AuthRedirect
}



export default authRedirectHoc