import axios from 'axios';
import {useEffect, useState} from 'react';
import './Tasks.css';


function Tasks() {

    const [tasks, setTasks] = useState([]);
    const [inputTask, setInputTask] = useState("");

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(res => setTasks(res.data))
    }, [])

    function addTask(e) {
        e.preventDefault();

        axios.post("https://jsonplaceholder.typicode.com/todos", {
            title: inputTask,
            completed: true,
            userId: 1
        })
        .then(res => {
            // Ca va récupérer l'entièreté des objets dans mon tableau d'avant
            // Et ça va ajouter la nouvelle tâche créée par mon API
            setTasks([...tasks,res.data]);
        })
    }

    return (
        <div>
            <h2>Ajouter une tâche</h2>
            <form onSubmit={addTask}>
                <input type="text" value={inputTask}
                    onChange={e => setInputTask(e.target.value)}
                />
                <button type="submit">Ajouter</button>
            </form>

            <h2>Liste des tâches</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id} className={ task.completed ?
                        "task task--completed":"task"}>
                            {task.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Tasks;