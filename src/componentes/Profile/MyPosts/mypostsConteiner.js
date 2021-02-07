import { connect } from "react-redux";
import { addNewPostActionCreater, textNewPostActionCreater } from "../../../redux/reducer/profileReducer";
import MyPosts from "./myposts";




const mapStateToProps = (state) => {
    return {
        myPosts: state.profilePage.Myposts,
        defaultInputValue: state.profilePage.TextNewPost
    }
}

const mapDispatchToProps = (dispatch) => {
    
    const updateInputValue = (text) => {
        dispatch(textNewPostActionCreater(text))
    }
    const addNewPost = () => {
        dispatch(addNewPostActionCreater());
    }
    return {
        updateInputValue: updateInputValue,
        addNewPost: addNewPost
    }
}


const MyPostsConteiner = connect(mapStateToProps, mapDispatchToProps) (MyPosts)


export default MyPostsConteiner;