import React from 'react';
import style from './addform.module.css'

const Addform = ({onAdd}) => {
    const formRef   = React.createRef();
    const inputRef   = React.createRef();

    const onSubmit = event => {
        event.preventDefault();
        const name = inputRef.current.value;
        console.log(name);
        name && onAdd(name)
        formRef.current.reset();
    }

    return (
        <div>
            <form className={style.form} onSubmit={onSubmit} ref={formRef}>
                <input className={style.input} type="text" placeholder="Habit" ref={inputRef} />
                <button className={style.button}>Add</button>
            </form>
        </div>
    );
};

export default Addform;