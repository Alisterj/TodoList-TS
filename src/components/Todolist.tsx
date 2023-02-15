import React, {useState} from 'react';
import {ButtonNameType, HeaderType, TaskType} from "../App";

type TodolistPropsType = HeaderType & {
    header: string
    tasks: Array<TaskType>
    removeTask: (taskID: string) => void
};
export const Todolist = (props: TodolistPropsType) => {
    let [filter, setFilter]= useState<ButtonNameType>('All');
    const filteringTasks = (buttonName: ButtonNameType) => setFilter(buttonName);

    let filterTasks = props.tasks;
    if (filter === 'Active')
        filterTasks = props.tasks.filter(el => el.isDone)
    if (filter === 'Completed')
        filterTasks = props.tasks.filter(el => !el.isDone)

    const tasksShow = filterTasks.length === 0 || filterTasks == null
        ? <span>Not have tasks</span>
        : filterTasks.map(el => {
            return (
                <li key={el.id}>
                    <button onClick={() => props.removeTask(el.id)}>X</button>
                    <input type="checkbox" checked={el.isDone}/>
                    <span>{el.title}</span>
                </li>
            );
        });

    return (
        <div>
            <h3>{props.header}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {tasksShow}
            </ul>
            <div>
                <button onClick={() => filteringTasks('All')}>All</button>
                <button onClick={() => filteringTasks('Active')}>Active</button>
                <button onClick={() => filteringTasks('Completed')}>Completed</button>
            </div>
        </div>
    );
};