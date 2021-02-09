import React from 'react';
import { connect } from 'react-redux';
import Header from './header'
import { getAuthMe, getAuthMeThunk } from '../../redux/reducer/authReducer';




class HeaderApi extends React.Component {

    componentDidMount() {
        this.props.getAuthMeThunk()              
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


export default connect(mapStateToProps, {getAuthMe, getAuthMeThunk}) (HeaderApi)