import React from 'react'
import style from './messages.module.css'
import {MessageArrType} from '../../../utilits/MyType'

type PropsType ={
    message: MessageArrType
}

const Messages: React.FC<PropsType> = ({message}) => {
    
    return (
        <div>
            <div key={message.id} className={style.text}>
                {message.message}
            </div>
        </div>
    )
}

export default Messages