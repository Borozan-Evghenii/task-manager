import React, {useState} from 'react';
import style from './CreateTask.module.css'
import Input from "../../UI/input/Input";
import {useDispatch} from "react-redux";
import {createTask} from "../../redux/tasksSlice/tasksSlice";
function CreateTask() {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const handleCreateTask = (e) => {
        if (e.key === 'Enter' && value.length){
            const newItem ={
                id : Date.now(),
                title: value,
                completed: false
            }
            dispatch(createTask(newItem))
            setValue('')
        }
    }
    return (
        <div className={style.input}>
            <span className={style.inputIndicator}></span>
            <Input
                value={value}
                onChange={(e)=> setValue(e.target.value)}
                placeholder={'Create a new Task'}
                onKeyDown={(e)=> handleCreateTask(e)}
            />
        </div>
    );
}

export default CreateTask;