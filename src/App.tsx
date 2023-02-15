import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";
import {v1} from "uuid";

export type HeaderType = {
    header: string
    newHeader?: string
};
export type TaskType = {
    id: string
    title: string
    isDone: boolean
};
export type ButtonNameType = 'All' | 'Active' | 'Completed';

function App() {
    const header: Array<HeaderType> = [
        {header: 'What to learn 1', newHeader: 'What to learn 11111111'},
        {header: 'What to learn 2', newHeader: 'What to learn 22222222'},
    ];
    let [task, setTask] = useState<Array<TaskType>>([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'React', isDone: false},
    ]);
    const removeTask = (taskID: string) => setTask(task.filter(el => el.id !== taskID));

    return (
        <div className="App">
            <Todolist header={header[0].header}
                      tasks={task}
                      removeTask={removeTask}/>
        </div>
    );
}

export default App;
