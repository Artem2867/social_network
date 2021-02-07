import React from 'react';
import style from  "./navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <div className="navbar_links">
                <div className={style.link}>
                    <NavLink to="/profile" activeClassName={style.active}>Profile</NavLink>
                </div>
                <div className={style.link}>
                    <NavLink to="/dialogs" activeClassName={style.active}>Messages</NavLink>
                </div>
                <div className={style.link}>
                    <NavLink to="/users" activeClassName={style.active}>Users</NavLink>
                </div>
                <div className={style.link}>
                    <NavLink to="/news" activeClassName={style.active}>News</NavLink>
                </div>
                <div className={style.link}>
                    <NavLink to="/music" activeClassName={style.active}>Music</NavLink>
                </div>
                <div className={`${style.link} ${style.link_last}`}>
                    <NavLink to="/settings" activeClassName={style.active}>Settings</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar;