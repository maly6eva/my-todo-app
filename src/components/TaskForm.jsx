import React, {useState} from 'react';

export const TaskForm = ({onAddTask}) => {
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('Работа')

    function handleSubmit(e) {
        e.preventDefault()
        if(!title.trim()) return;

        const newTask = {
            id: Date.now(),
            title,
            category,
            completed: false
        }
        onAddTask(newTask)
        setTitle('')
        setCategory('Работа')

    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Введите задачу' value={title} onChange={(e) => setTitle(e.target.value)}/>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="Работа">Работа</option>
                <option value="Учеба">Учеба</option>
                <option value="Дом">Дом</option>
            </select>
            <button type='submit'>Добавить!</button>
        </form>
    );
};


