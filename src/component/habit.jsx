import React from 'react';
import style from './habit.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faMinusSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const Habit = () => {
    return (
        <li className={style.container}>
            <span className={style.state}>Rreading</span>
            <span className={style.number}>8</span>
            <button className={style.button}>
                <FontAwesomeIcon className={style.plus} icon={faPlusSquare}></FontAwesomeIcon>
            </button>
            <button className={style.button}>
                <FontAwesomeIcon className={style.minus} icon={faMinusSquare}></FontAwesomeIcon>
            </button>
            <button className={style.button}>
                <FontAwesomeIcon className={style.trash} icon={faTrash}></FontAwesomeIcon>
            </button>

        </li>
    );
};

export default Habit;