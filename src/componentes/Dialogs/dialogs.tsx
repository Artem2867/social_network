import React from "react";
import style from "./dialogs.module.css";
import Messages from "./Messages/messages"
import Dialog from './Dialog/dialog'
import NewMassage from './NewMessage/newMessage'
import { DialogsArrType, MessageArrType } from "../../utilits/MyType";


type PropsType = {
    dialogArr: Array<DialogsArrType>
    Message: Array<MessageArrType>
    defaultInputValue: string
    sendNewMessage: () => void
    textNewMessage: () => void
}

const Dialogs: React.FC<PropsType> = ({dialogArr, Message, defaultInputValue, sendNewMessage, textNewMessage}) => {

    const dialog = dialogArr.map((el: DialogsArrType) => <Dialog dialog = {el}/>);
    const message = Message.map((el:MessageArrType) => <Messages  message={el}/>)

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
                        defaultValue={defaultInputValue}
                        sendNewMessage={sendNewMessage}
                        textNewMessage={textNewMessage}/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;