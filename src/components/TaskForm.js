import React, {useState} from "react";

const TaskForm = ({addTask}) => {
    const [inputState, setInputState] = useState('');

    const changeInput = event => {
        setInputState(event.currentTarget.value);
    };

    const submitTask = event => {
        addTask(inputState);
        event.preventDefault();
        setInputState('');
    };

    const keyPress = event => {
        if(event.Key === 'Enter'){
            submitTask(event);
        }
    };

    return (
        <form 
            onSubmit={submitTask}
            onKeyDown={keyPress}
            className="tasks__form"
        >
            <input
                className="tasks__input"
                onChange={changeInput}
                value={inputState}
                placeholder="Введите новое задание"
            />
            <button className="tasks__btn">
                Добавить
            </button>
        </form>
    );
};

export default TaskForm;