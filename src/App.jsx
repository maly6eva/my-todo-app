import {useState} from 'react'

import './App.css'
import {TaskForm} from "./components/TaskForm.jsx";
import {TaskList} from "./components/TaskList.jsx";
import {FilterBox} from "./components/FilterBox.jsx";

function App() {
    const [tasks, setTasks] = useState([])
    const [obj, setObj] = useState([
        {id: 1, title: 'Поработать', category: 'Учеба', completed: false },
        {id: 2, title: 'Купить продукты', category: 'Работа', completed: false },
        {id: 3, title: 'Поиграть с малышом', category: 'Дом', completed: false },
    ])
    const [filter, setFilter] = useState('Все')



    function  resultFilteredTasks (filt) {
        setFilter(filt)
    }

    const filteredTasksRes = obj.filter(task => {
        if (filter === 'Все') return true;
        if(filter === 'Выполненные') return task.completed;
        if(filter === 'Активные') return !task.completed;
    })


    function addTask(newTask) {
        setTasks((prevTasks) => [...prevTasks, newTask])
    }


    function toggleTask(id) {
        setObj((prev) =>
        prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed} :  task))
    }


    return (
        <>
            <h1>gi</h1>
            <TaskForm onAddTask={addTask}/>
            <TaskList obj={ filteredTasksRes} toggleTask={toggleTask}/>
            <FilterBox resultFil={resultFilteredTasks} />
        </>
    )
}

export default App
