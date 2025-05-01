import React from 'react';

export const TaskItem = ({ t, toggleTask}) => {
    return (
        <>
            <li>
                <input
                    type="checkbox"
                    checked={t.completed}
                    onChange={() => toggleTask(t.id) }
                    id='scales' name='scales'/>
                <span style={{ textDecoration : t.completed ? 'line-through' : 'none'}} >{t.title}</span> {' '} -  <em>{t.category}</em>
            </li>
    </>
    );
};

