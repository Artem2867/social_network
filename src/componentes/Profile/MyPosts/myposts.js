import React from 'react'
import style from './myposts.module.css'
import MyPost from './MyPost/mypost'
import NewPost from './NewPost/newpost'


const MyPosts = (props) => {
    const post = props.myPosts.map((el) => <MyPost post={el.post} like={el.likeCount} id={el.id}/>)
    return (
        <div className={style.posts}>
            <div>
                <NewPost
                    inputValue={props.defaultInputValue}
                    updateInputValue={props.updateInputValue}
                    addNewPost={props.addNewPost}/>
            </div>

            <div>
                {post}
            </div>
        </div>
    )
}

export default MyPosts