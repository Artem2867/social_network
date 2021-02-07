import React from 'react';
import { connect } from "react-redux";
import { followedUser, unfollowedUser, getUsers, getMoreUsers } from "../../redux/reducer/usersReducer";
import Users from "./users";
import * as axios from 'axios'
import Preloader from '../Preloader/preloader';




class UsersConteinerApi extends React.Component {

    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users?count=10&page=1', {
                withCredentials: true
            })
            .then(response => {
                this.props.getUsers(response.data)
            })
                
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
                    onClick={() => {this.getMoreUsers()}}>More</button>
            )
        }
    }

    getMoreUsers = () => {
        const page = this.props.page + 1
        this.props.getMoreUsers(page)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=10&page=${page}`,{
                withCredentials: true
            })
            .then(response => {
                this.props.getUsers(response.data)
            }) 
    }
    getFollowUsers = (id) => {
        axios 
            .get(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
                withCredentials: true
            })
            .then(response => {
                debugger
                this.props.followedUser(response.data, id)
            })
    }
    followUser = (id) => {
        axios 
        .post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,{},{
            withCredentials: true,
            headers:{
                'API-KEY': 'd698822b-804b-426e-88fb-49ddad4c012a'
            }
        })
        .then(response => {
            this.getFollowUsers(id)
        }) 
    }
    unFollowUser = (id) => {
        axios 
        .delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,{
            withCredentials: true,
            headers:{
                'API-KEY': 'd698822b-804b-426e-88fb-49ddad4c012a'
            }
        })
        .then(response => {
            debugger
            this.getFollowUsers(id)
        }) 
    }

    render() {
        return (
            <>
                {this.isLoading()}
                <Users 
                    users={this.props.users}
                    unfollowedUser={this.props.unfollowedUser}
                    followedUser={this.props.followedUser}
                    follow={this.followUser}
                    unfollow={this.unFollowUser}/>
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


const UsersConteiner = connect(mapStateToProps, {followedUser, unfollowedUser, getUsers, getMoreUsers} ) (UsersConteinerApi)

export default UsersConteiner;