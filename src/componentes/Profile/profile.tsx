import React from 'react';
import style from './profile.module.css'
import MyPostsConteiner from './MyPosts/mypostsConteiner';
import ProfileInfoApi from './ProfileInfo/profileInfoConteiner';
import { Redirect } from 'react-router-dom';
import { ProfileInfoType } from '../../utilits/MyType';
import {RouteComponentProps} from 'react-router-dom'

type ParamsType = {
    userId: string
}

type PropsType =  {
    profileInfo: ProfileInfoType
    myId: number | null
    userId: number | null
    getProfileInfoThunk: (userId: string) => void
}

const Profile: React.FC<RouteComponentProps<ParamsType> & PropsType> = ({myId, userId, profileInfo, getProfileInfoThunk, match}) => {
    const login = () => {
        return <Redirect to='/login'/>
    }

    return (
        <div>
            {myId || myId === userId?
                <div className={style.profile}>
                    <ProfileInfoApi 
                        profileInfo={profileInfo}
                        userId={match.params.userId}
                        getProfileInfoThunk={getProfileInfoThunk}/>
                    <MyPostsConteiner/>
                </div>
                :login()
            }
        </div>
    )
}

export default Profile;