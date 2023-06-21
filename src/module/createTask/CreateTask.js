import React, {useState} from 'react';
import style from './CreateTask.module.css'
import Input from "../../UI/input/Input";
import {useCreateTaskMutation, useUpdateStatusMutation} from "../../redux/tasksApi";
function CreateTask() {
    const [value, setValue] = useState('')
    const [createTask, result] = useCreateTaskMutation()
    const handleCreateTask = (e) => {
        if (e.key === 'Enter' && value.length){
            createTask(value)
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