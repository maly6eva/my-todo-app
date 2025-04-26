import {useState} from 'react'

import './App.css'
import {TaskForm} from "./components/TaskForm.jsx";
import {TaskList} from "./components/TaskList.jsx";

function App() {
    const [tasks, setTasks] = useState([])
    const [obj, setObj] = useState([
        {id: 1, title: 'Поработать', category: 'Учеба', completed: false },
        {id: 2, title: 'Купить продукты', category: 'Работа', completed: false },
        {id: 3, title: 'Поиграть с малышом', category: 'Дом', completed: false },
    ])
    // const [filter, setFilter] = useState('all')


    function addTask(newTask) {
        setTasks((prevTasks) => [...prevTasks, newTask])
    }

    const filteredTasks = obj;


    return (
        <>
            <h1>gi</h1>
            <TaskForm onAddTask={addTask}/>
            <TaskList obj={filteredTasks}/>
        </>
    )
}

export default App
