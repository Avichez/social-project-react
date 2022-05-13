import React from "react";
import { NavLink } from "react-router-dom";
import style from './../Dialogs.module.css'

const DialogsItem = (props) => {
    return (
        <li className={style.dialogs_list_item}>
            <NavLink activeClassName={style.active_dialog} to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </li>
    )
}

export default DialogsItem;