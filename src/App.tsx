import React from 'react';
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
function App() {
    const header: Array<HeaderType> = [
        {header: 'What to learn 1', newHeader: 'What to learn 11111111'},
        {header: 'What to learn 2', newHeader: 'What to learn 22222222'},
    ];
    const task1: Array<TaskType> = [
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'React', isDone: false},
    ];
    const task2: Array<TaskType> = [
        {id: v1(), title: 'Hello world', isDone: true},
        {id: v1(), title: 'I\'m happy', isDone: false},
        {id: v1(), title: 'Yo', isDone: false},
    ];

    return (
        <div className="App">
            <Todolist header={header[0].header}
                      newHeader={header[0].newHeader}
                      tasks={task1}/>
            <Todolist header={header[1].header}
                      tasks={task2}/>
        </div>
    );
}

export default App;
