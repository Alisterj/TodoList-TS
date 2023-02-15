import React from 'react';
import {HeaderType, TaskType} from "../App";

type TodolistPropsType = HeaderType & {
    tasks?: Array<TaskType>
};
export const Todolist = (props: TodolistPropsType) => {
    let tasksShow = props.tasks?.length == 0 || props.tasks == null
        ? <span>Not have tasks</span>
        : props.tasks?.map(t => {
            return(
                <li key={t.id}><input type="checkbox" checked={t.isDone}/> <span>{t.title}</span></li>
            );
        });

    return (
        <div>
            <h3>{props.header}</h3>
            <h3>{props.newHeader}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {tasksShow}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};