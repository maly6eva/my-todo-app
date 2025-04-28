import React from 'react';

export const TaskItem = ({ ob, toggleTask}) => {
    return (
        <>
            <li>
                <input
                    type="checkbox"
                    checked={ob.completed}
                    onChange={() => toggleTask(ob.id) }
                    id='scales' name='scales'/>
                <span style={{ textDecoration : ob.completed ? 'line-through' : 'none'}} >{ob.title}</span> - <em>{ob.category}</em>
            </li>

    </>

    );
};

