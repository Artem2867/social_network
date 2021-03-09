import React, { FC, useEffect } from 'react';
import { connect } from "react-redux";
import {  getUsersThunk, getMoreUsersThunk,
          followUserThunk, unfollowUserThunk } from "../../redux/reducer/usersReducer";
import User from "./users";
import Preloader from '../Preloader/preloader';
import authRedirectHoc from '../../HOC/authHOC';
import { compose } from 'redux';
import { AppState } from '../../redux/redux-store';
import { UserType } from '../../utilits/MyType';

export type DispatchPropsType = {
    followUserThunk: (id: number | null) => void
    getMoreUsersThunk: () => void
    unfollowUserThunk: (id: number | null) => void
    getUsersThunk: () => void
}

export type StatePropsType = {
    users: Array<UserType>
    isLoading: boolean
    page: number
    totalCount: number
}


const  UsersConteinerApi: FC<DispatchPropsType & StatePropsType> = (props) => {

    useEffect(() => {
        props.getUsersThunk()
    }, [])
        
    const isLoading = () => {
        if(props.isLoading === true) {
            return <Preloader/>
        }
    }

    const getMore = () => {
        if (props.totalCount > props.page) {
            return (
                <button
                    onClick={() => {props.getMoreUsersThunk()}}>More</button>
            )
        }
    }
    return (
        <>
            {isLoading()}
            <User 
                users={props.users}
                follow={props.followUserThunk}
                unfollow={props.unfollowUserThunk}/>
            <div>
                {getMore()}
            </div>
        </>
    )
}

const mapStateToProps = (state: AppState) => {
    return {
        users: state.usersPage.users,
        isLoading: state.usersPage.isLoading,
        page: state.usersPage.page,
        totalCount: state.usersPage.totalCount,
    }

}


export default compose<React.ComponentType>(
    connect(mapStateToProps, 
        {getUsersThunk, getMoreUsersThunk, followUserThunk, unfollowUserThunk} ),
    authRedirectHoc
) (UsersConteinerApi);