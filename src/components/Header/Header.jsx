import React from "react";
import { NavLink } from "react-router-dom";
import logoImage from './../../assets/images/logoreact.png';
import style from './Header.module.css'

const Header = (props) => {
    return (
        <header className={style.header}>
            <NavLink to='/profile'>
                <img src={logoImage} width='70' />
            </NavLink>
            <div className={style.profile_body}>
                <p>PROFILE</p>
            </div>
        </header>
    );
}

export default Header;