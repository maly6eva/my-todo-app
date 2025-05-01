import React from 'react';
import {TaskItem} from "./TaskItem.jsx";

export const TaskList = ({ tasks, toggleTask}) => {
    return (
        <>
            <ul>
                {tasks.map((task) => (
                    <TaskItem key={task.id} t={task} toggleTask={toggleTask}/>
                ))}
            </ul>
        </>
    );
};




