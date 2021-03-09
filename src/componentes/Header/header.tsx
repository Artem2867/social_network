import React from 'react';
import { NavLink } from 'react-router-dom';
import style from "./header.module.css";

type PropsType = {
    id: number | null
    login: string | null
    email: string | null
    resultCode: number | null
    logOut: () => void
}


const Header: React.FC <PropsType> = ({id, login, email, resultCode, logOut}) => {
    
    return (
        <div className={style.header}>
             <div className={style.logo}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/97/Logo%21_Logo.svg" alt="logo"/>
             </div>
             <div className="header_name">
                <h1>Our socail network</h1>
             </div>
             <div>
                 {login}
             </div>
             <NavLink to="/login">
                <div className={style.login}>
                    {resultCode === 0? 
                            <div onClick={logOut}>log out</div>: 'login'}
                </div>
             </NavLink>
        </div>
    )
}

export default Header;