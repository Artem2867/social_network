import React from 'react';
import * as axios from 'axios'
import { connect } from 'react-redux';
import Header from './header'
import { getAuthMe } from '../../redux/reducer/authReducer';




class HeaderApi extends React.Component {

    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/auth/me',{
                withCredentials: true
            })
            .then(response => {
                this.props.getAuthMe(response.data.data, response.data.resultCode)
            })                
    }   


    render() {
        return <Header
                    id={this.props.id}
                    login={this.props.login}
                    email={this.props.email}
                    resultCode={this.props.resultCode}/>
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.authMe.id,
        login: state.authMe.login,
        email: state.authMe.email,
        resultCode: state.authMe.resultCode
    }
}


export default connect(mapStateToProps, {getAuthMe}) (HeaderApi)