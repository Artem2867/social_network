import React from 'react'
import style from './newpost.module.css'

const NewPost = (props) => {
   

    const updateInputValue = (e) => {
        let inputValue = e.target.value
        props.updateInputValue(inputValue)
    }

    const addNewPost = () => {
        props.addNewPost()
    }


    return (
        <div>
            <div className={style.title}>
                My Posts
            </div>
            <div> 
                <textarea 
                    onChange={updateInputValue}
                    placeholder="your post..." 
                    className={style.input} 
                    value={props.inputValue}/>
                <button 
                    onClick={addNewPost}
                    className={style.btn} 
                    type="submit">Send</button>
            </div>
        </div>
    )
}


export default NewPost