import React from 'react';
import style from './newMessage.module.css' 

const NewMassage = (props) => {


    const updateInputValue = (e) => {
        let inputValue = e.target.value;
        props.textNewMessage(inputValue)
    }
    const sendNewMessage = () => {
        props.sendNewMessage()
    }


    return (
        <div>
            <div>
                <textarea 
                    onChange={updateInputValue}
                    value={props.defaultValue} 
                    className={style.input}/>
            </div>
            <div>
                <button
                    onClick={sendNewMessage}
                    >
                    Send
                </button>
            </div>
        </div>
    )
}

export default NewMassage;