import React, { FC } from 'react'
import style from './myposts.module.css'
import MyPost from './MyPost/mypost'
import NewPost from './NewPost/newpost'
import { MypostType } from '../../../utilits/MyType'

type PropsType = {
    myPosts: Array<MypostType>
    defaultInputValue:  string
    addNewPost: () => void
    textNewPost: (text: string) => void
}

const MyPosts: FC<PropsType> = ({myPosts, defaultInputValue, addNewPost, textNewPost}) => {
    const post = myPosts.map((el: MypostType) => <MyPost post={el.post} like={el.likeCount} id={el.id}/>)
    return (
        <div className={style.posts}>
            <div>
                <NewPost
                    inputValue={defaultInputValue}
                    updateInputValue={textNewPost}
                    addNewPost={addNewPost}/>
            </div>

            <div>
                {post}
            </div>
        </div>
    )
}

export default MyPosts