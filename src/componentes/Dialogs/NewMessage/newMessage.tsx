import React from 'react';
import style from './newMessage.module.css' 

type PropsType = {
    textNewMessage: (inputValue:string) => void
    sendNewMessage: () => void
    defaultValue: string
}


const NewMassage: React.FC<PropsType> = ({textNewMessage, sendNewMessage, defaultValue}) => {


    const updateInputValue = (e:any) => {
        let inputValue:string = e.target.value;
        textNewMessage(inputValue)
    }
    const sendMessage = () => {
        sendNewMessage()
    }


    return (
        <div>
            <div>
                <textarea 
                    onChange={updateInputValue}
                    value={defaultValue} 
                    className={style.input}/>
            </div>
            <div>
                <button
                    onClick={sendMessage}
                    >
                    Send
                </button>
            </div>
        </div>
    )
}

export default NewMassage;