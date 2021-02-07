import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getProfileInfo } from '../../redux/reducer/profileReducer';
import Profile from './profile'





let WithUrlComponent = withRouter(Profile);

const mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.ProfileInfo
    }
}



const ProfileConteiner = connect(mapStateToProps, {getProfileInfo}) (WithUrlComponent)

export default ProfileConteiner;