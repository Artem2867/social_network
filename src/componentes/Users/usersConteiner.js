import React from 'react';
import { connect } from "react-redux";
import { followedUser, unfollowedUser, getUsers,
         getMoreUsers, getUsersThunk, getMoreUsersThunk,
         getFollowUsersThunk, followUserThunk, unfollowUserThunk } from "../../redux/reducer/usersReducer";
import Users from "./users";
import Preloader from '../Preloader/preloader';





class UsersConteinerApi extends React.Component {

    componentDidMount() {
        this.props.getUsersThunk()
   }

    isLoading = () => {
        if(this.props.isLoading === true) {
            return <Preloader/>
        }
    }

    getMore = () => {
        if (this.props.totalCount > this.props.page) {
            return (
                <button
                    onClick={() => {this.props.getMoreUsersThunk()}}>More</button>
            )
        }
    }

    render() {
        return (
            <>
                {this.isLoading()}
                <Users 
                    users={this.props.users}
                    unfollowedUser={this.props.unfollowedUser}
                    followedUser={this.props.followedUser}
                    follow={this.props.followUserThunk}
                    unfollow={this.props.unfollowUserThunk}/>
                <div>
                    {this.getMore()}
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        isLoading: state.usersPage.isLoading,
        page: state.usersPage.page,
        totalCount: state.usersPage.totalCount
    }

}


const UsersConteiner = connect(mapStateToProps, 
    {followedUser, unfollowedUser, getUsers, getMoreUsers, 
    getUsersThunk, getMoreUsersThunk, getFollowUsersThunk,
    followUserThunk, unfollowUserThunk} ) (UsersConteinerApi)

export default UsersConteiner;