import React from 'react';
import Habit from "./habit";

const Habits = (props) => {
    
    
    const onDelete = (habit) => {
        
        props.onDelete(habit);
    }

    const ondecrease = (habit) => {
        props.ondecrease(habit);
        
    }

    const onincrease = (habit) => {
        props.onincrease(habit);
       
       
    }
    

    
    return (
        
        <div>
            
           {props.habits.map(habit=>(
               <Habit 
                key={habit.id}
                habit={habit}
                ondecrease={ondecrease}
                onDelete={onDelete}
                onincrease={onincrease}>

                </Habit>

           ))}
           <button onClick={props.onReset}>Resetall</button>
        </div>
    );
};

export default Habits;