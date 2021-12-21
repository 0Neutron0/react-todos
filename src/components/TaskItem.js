import React from "react";

const TaskItem = ({task, index, removeTask, changeTaskStatus}) => {
    return ( 
        <section className={"tasks__item tasks__item-" + task.status}>
            <div className="tasks__index">{index}.</div>
            <div
                className="tasks__text"
                onClick={() => changeTaskStatus(task)}
            >
                {task.text}
            </div>
            <div
                className="tasks__icon"
                onClick={() => removeTask(task)}
            >
            </div>
        </section>
     );
};

export default TaskItem;