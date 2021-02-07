import React from 'react';




const ProfileInfo = (props) => {
    return (
        <div>
            <div className="profile_descr">
                <img src={!props.profileInfo.photos.large?'https:images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80':props.profileInfo.photos.large} alt="main"/>
            </div>
            <div className="profile_user">
                <div className="profile_descr">
                    <img src={!props.profileInfo.photos.small?"https://image.flaticon.com/icons/png/512/216/216221.png":props.profileInfo.photos.small} alt="ava"/>
                </div>
                <div className="profile_descr">
                    <div className="profile_name">
                        {props.profileInfo.fullName}
                    </div>
                    <div className="profile_item">
                        Description
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;