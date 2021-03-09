import React, { FC } from 'react'
import style from './newpost.module.css'


type PropsType = {
    updateInputValue: (text: string) => void
    addNewPost: () => void
    inputValue: string
}

const NewPost: FC<PropsType> = ({updateInputValue, addNewPost, inputValue}) => {
   

    const NewInputValue = (e: any) => {
        let inputValue = e.target.value
        updateInputValue(inputValue)
    }

    const PushNewPost = () => {
        addNewPost()
    }


    return (
        <div>
            <div className={style.title}>
                My Posts
            </div>
            <div> 
                <textarea 
                    onChange={NewInputValue}
                    placeholder="your post..." 
                    className={style.input} 
                    value={inputValue}/>
                <button 
                    onClick={PushNewPost}
                    className={style.btn} 
                    type="submit">Send</button>
            </div>
        </div>
    )
}


export default NewPost