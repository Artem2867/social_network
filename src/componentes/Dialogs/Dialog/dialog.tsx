import React from "react"
import style from './dialog.module.css'
import {DialogsArrType} from '../../../utilits/MyType'

type PropsType = {
    dialog: DialogsArrType
}


const Dialog: React.FC<PropsType> = ({dialog}) => {

    return (
        <div>
            <div key={dialog.id}className={style.name}>
                {dialog.name}
            </div>
        </div>
    )
}


export default Dialog