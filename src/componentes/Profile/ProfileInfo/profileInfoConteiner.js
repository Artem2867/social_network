import React from 'react';
import * as axios from 'axios'
// import Profile from '../profile';
import ProfileInfo from './profileInfo';




class ProfileInfoApi extends React.Component {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.userId}`)
            .then(response => {
                this.props.getProfileInfo(response)
            })
    }
    render() {
        return <ProfileInfo profileInfo={this.props.profileInfo}/>
    }
}




export default ProfileInfoApi;