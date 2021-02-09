import React from 'react';
import style from './profile.module.css'
import MyPostsConteiner from './MyPosts/mypostsConteiner';
import ProfileInfoApi from './ProfileInfo/profileInfoConteiner';

const Profile = (props) => {
    return (
        <div className={style.profile}>
            <ProfileInfoApi 
                profileInfo={props.profileInfo}
                userId={props.match.params.userId}
                getProfileInfo={props.getProfileInfo}
                getProfileInfoThunk={props.getProfileInfoThunk}/>
            <MyPostsConteiner/>
        </div>
    )
}

export default Profile;