import React from 'react';
import style from "./header.module.css";



const Header = (props) => {
    
    return (
        <div className={style.header}>
             <div className={style.logo}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/97/Logo%21_Logo.svg" alt="logo"/>
             </div>
             <div className="header_name">
                <h1>Our socail network</h1>
             </div>
             <div>
                 {props.login}
             </div>
             <div>
                 {props.resultCode === 0? 'log out': 'login'}
             </div>
        </div>
    )
}

export default Header;