import { connect, ConnectedProps } from "react-redux";
import { addNewPost, textNewPost } from "../../../redux/reducer/profileReducer";
import { AppState } from "../../../redux/redux-store";
import MyPosts from "./myposts";




const mapStateToProps = (state: AppState) => {
    return {
        myPosts: state.profilePage.Myposts,
        defaultInputValue: state.profilePage.TextNewPost
    }
}

const MyPostsConteiner = connect(mapStateToProps, {addNewPost, textNewPost})

type MyPostsPropsType = ConnectedProps<typeof MyPostsConteiner>


export default  MyPostsConteiner(MyPosts);