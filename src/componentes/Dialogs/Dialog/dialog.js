import React from "react"
import style from './dialog.module.css'

const Dialog = (props) => {

    return (
        <div>
            <div key={props.dialog.id}className={style.name}>
                {props.dialog.name}
            </div>
        </div>
    )
}


export default Dialog