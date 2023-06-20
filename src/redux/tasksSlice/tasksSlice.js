import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const  tasksFetch = createAsyncThunk('tasks/fetchTasks', async () => {
    return await fetch('http://localhost:3001/todos?_limit=10').then(result => result.json())

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
            .addMatcher(action => action.type.endsWith('/rejected'),
            (state, action) => {
                state.status.message = action.payload
                state.status.status = 'rejected'
            })
    },
})

export const { updateStatus, createTask, clearCompleted  } = tasksSlice.actions

export default tasksSlice.reducer