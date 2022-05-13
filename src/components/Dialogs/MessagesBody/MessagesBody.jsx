import React from "react";
import style from './MessagesBody.module.css'

const MessagesBody = (props) => {
    return (
        <div className={style.text_body}>
            <span>{props.message}</span>
        </div>
    )
}

export default MessagesBody;