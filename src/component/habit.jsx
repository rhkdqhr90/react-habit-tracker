
import style from './habit.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faMinusSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const Habit = (props) => {
    
    
    const handleincrease = ()=>{
        props.onincrease(props.habit)
    }
    const handledecrease = () =>{
        props.ondecrease(props.habit)
    }

    const handleDelete = () =>{
       
        props.onDelete(props.habit);

        
    }  
  
    
    
    return (
        <li className={style.container}>
            <span className={style.state}>{props.habit.name}</span>
            <span className={style.number}>{props.habit.count}</span>
            <button className={style.button} onClick={handleincrease} >
                <FontAwesomeIcon className={style.plus} icon={faPlusSquare}></FontAwesomeIcon>
            </button>
            <button className={style.button} onClick={handledecrease}>
                <FontAwesomeIcon className={style.minus} icon={faMinusSquare}></FontAwesomeIcon>
            </button>
            <button className={style.button} onClick={handleDelete} >
                <FontAwesomeIcon className={style.trash} icon={faTrash}></FontAwesomeIcon>
            </button>

        </li>
    );
};

export default Habit;