import React from 'react';

export const FilterBox = ({resultFil}) => {
    return (
<>
    <button onClick={() => resultFil('Все') }>Все!</button>
    <button onClick={() => resultFil('Выполненные') }>Выполненные!</button>
    <button onClick={() => resultFil('Активные') }>Активные!</button>
</>

    );
};
