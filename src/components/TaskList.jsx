import React from 'react';
import {TaskItem} from "./TaskItem.jsx";

export const TaskList = ({ obj, toggleTask}) => {
    return (
        <>
            <ul>
                {obj.map((ob) => (
                    <TaskItem key={ob.id} ob={ob} toggleTask={toggleTask}/>
                ))}
            </ul>
        </>
    );
};




