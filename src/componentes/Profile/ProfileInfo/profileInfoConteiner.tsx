import React, { FC, useEffect } from 'react';
import { ProfileInfoType } from '../../../utilits/MyType';
import ProfileInfo from './profileInfo';


type PropsType = {
  userId: string
  getProfileInfoThunk: (userId: string) => void
  profileInfo: ProfileInfoType
}

const ProfileInfoApi: FC<PropsType> = ({userId, getProfileInfoThunk, profileInfo}) => {

  useEffect(() => {
     getProfileInfoThunk(userId)
  }, [getProfileInfoThunk, userId])
  
  return <ProfileInfo profileInfo={profileInfo}/>

}


export default ProfileInfoApi;