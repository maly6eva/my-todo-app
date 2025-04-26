import React from 'react';

export const TaskItem = ({ ob}) => {
    return (
        <>
            <li>
                <span>{ob.title}</span> - <em>{ob.category}</em>
            </li>

    </>

    );
};

