import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import style from './navbar.module.css'

const Navbar = () => {
    return (
        <div>
            <div className={style.background}>
               <FontAwesomeIcon icon={faLeaf} className={style.icon}></FontAwesomeIcon>
               <h1 className={style.h1}>Habit Tracker </h1>
               <div className={style.state}>0</div>
            </div>
        </div>
    );
};

export default Navbar;