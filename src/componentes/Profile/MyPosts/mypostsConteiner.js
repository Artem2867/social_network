import { connect } from "react-redux";
import { addNewPost, textNewPost } from "../../../redux/reducer/profileReducer";
import MyPosts from "./myposts";




const mapStateToProps = (state) => {
    return {
        myPosts: state.profilePage.Myposts,
        defaultInputValue: state.profilePage.TextNewPost
    }
}


const MyPostsConteiner = connect(mapStateToProps, {addNewPost, textNewPost}) (MyPosts)


export default MyPostsConteiner;