import React from 'react';
import ProfileInfo from './profileInfo';


class ProfileInfoApi extends React.Component {
    componentDidMount() {
      this.props.getProfileInfoThunk(this.props.userId)
    }
    render() {
        return <ProfileInfo profileInfo={this.props.profileInfo}/>
    }
}


export default ProfileInfoApi;