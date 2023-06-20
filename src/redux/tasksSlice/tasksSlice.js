import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const  tasksFetch = createAsyncThunk('tasks/fetchTasks', async () => {
    return await fetch('http://localhost:3001/todos?_limit=10').then(result => result.json())

})

export const clearCompletedQuery = createAsyncThunk('tasks/clearCompleted', async (state)=> {
    const completed = state.tasks.filter(item => item.completed === true)
    completed.forEach(item =>
        fetch(`http://localhost:3001/todos${item.id}`, {
            method: 'DELETE'
        })
    )
})


const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        status: {
            status: 'pending',
            message: null
        }
    },
    reducers:{
        updateStatus: (state, action) => {
            const item = state.tasks.find(item => item.id === action.payload)
            item.completed = !item.completed
        },
        createTask: (state, action) => {
            state.tasks.unshift(action.payload)
        },
        clearCompleted: (state)=> {
            state.tasks = state.tasks.filter(item => item.completed !== true)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(tasksFetch.fulfilled , ( state, action) => {
                state.tasks = action.payload
                state.status.status = 'fulfilled'
            })
            .addCase(tasksFetch.rejected , ( state, action) => {
                state.status.status = 'rejected'
                state.status.message = action.payload
                console.log()
            })
    },


})


export const selectTasks = state => state.tasks

export const { updateStatus, createTask, clearCompleted  } = tasksSlice.actions

export default tasksSlice.reducer