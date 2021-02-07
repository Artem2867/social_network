import React from "react";
import style from "./dialogs.module.css";
import Messages from "./Messages/messages"
import Dialog from './Dialog/dialog'
import NewMassage from './NewMessage/newMessage'


const Dialogs = (props) => {

    const dialog = props.dialogArr.map((el) => <Dialog dialog = {el}/>);
    const message = props.message.map((el) => <Messages  message={el}/>)

    return (
        <div>
            <div className={style.title}>
                Dialogs
            </div>
            <div className={style.content}>
                <div>
                    {dialog}
                </div>
                <div>
                    {message}
                </div>
                <div>
                    <NewMassage
                        defaultValue={props.defaultInputValue}
                        sendNewMessage={props.sendNewMessage}
                        textNewMessage={props.textNewMessage}/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;