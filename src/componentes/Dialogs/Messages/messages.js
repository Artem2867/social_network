import React from 'react'
import style from './messages.module.css'

const Messages = (props) => {
    
    return (
        <div>
            <div key={props.message.id} className={style.text}>
                {props.message.message}
            </div>
        </div>
    )
}

export default Messages