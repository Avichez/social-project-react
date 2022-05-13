import React from "react";
import { NavLink } from "react-router-dom";
import FriendsBlock from "./FriendsBlock/FriendsBlock";
import style from './Sidebar.module.css'

const Sidebar = (props) => {
    return (
        <aside className={style.sidebar}>
            <ul className={style.sidebar_menu}>
                <li className={style.sidebar_list}>
                    <NavLink to='/profile' activeClassName={style.activeLink} className={style.sidebar_list_item}>Profile</NavLink>
                </li>
                <li className={style.sidebar_list}>
                    <NavLink to='/dialogs' activeClassName={style.activeLink} className={style.sidebar_list_item}>Dialogs</NavLink>
                </li>
                <li className={style.sidebar_list}>
                    <a href='' className={style.sidebar_list_item}>News</a>
                </li>
                <li className={style.sidebar_list}>
                    <a href='' className={style.sidebar_list_item}>Music</a>
                </li>
                <li className={style.sidebar_list}>
                    <a href='' className={style.sidebar_list_item}>Settings</a>
                </li>
                <li className={style.sidebar_list}>
                    <NavLink to='/users' className={style.sidebar_list_item}>Find Users</NavLink>
                </li>
            </ul>
            <FriendsBlock friendsData={props.state.sidebar.friendsData}/>
        </aside>
    )
}

export default Sidebar;