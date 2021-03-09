import { connect, ConnectedProps } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getProfileInfoThunk } from '../../redux/reducer/profileReducer';
import { AppState } from '../../redux/redux-store';
import Profile from './profile'



let WithUrlComponent = withRouter(Profile);

const mapStateToProps = (state:AppState) => {
    return {
        profileInfo: state.profilePage.ProfileInfo,
        myId: state.authMe.data.id,
        userId: state.profilePage.ProfileInfo.userId
    }
}

const ProfileConteiner = connect(mapStateToProps, {getProfileInfoThunk})

type PropsFromRedux = ConnectedProps<typeof ProfileConteiner>

export default ProfileConteiner(WithUrlComponent);