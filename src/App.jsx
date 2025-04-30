import {useState} from 'react'

import './App.css'
import {TaskForm} from "./components/TaskForm.jsx";
import {TaskList} from "./components/TaskList.jsx";
import {FilterBox} from "./components/FilterBox.jsx";
import {SearchInput} from "./components/SearchInput.jsx";

function App() {
    const [tasks, setTasks] = useState([])
    const [obj, setObj] = useState([
        {id: 1, title: 'Поработать', category: 'Учеба', completed: false },
        {id: 2, title: 'Купить продукты', category: 'Работа', completed: false },
        {id: 3, title: 'Поиграть с малышом', category: 'Дом', completed: false },
    ])
    const [filter, setFilter] = useState('Все')
    const [ searchTerm, setSearchTerm] = useState('')

    const filteredTasksRes  = obj.filter(task => {
        const matchesFilter =
            filter === 'Все' ||
            (filter === 'Выполненные' && task.completed) ||
            (filter === 'Активные' && !task.completed);

        const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase())
        return matchesFilter &&  matchesSearch
    })




    function  resultFilteredTasks (filt) {
        setFilter(filt)
    }


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
            <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <TaskForm onAddTask={addTask}/>
            <TaskList obj={ filteredTasksRes} toggleTask={toggleTask}/>
            <FilterBox resultFil={resultFilteredTasks} />
        </>
    )
}

export default App
