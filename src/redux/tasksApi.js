import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const tasksApi = createApi({
    reducerPath: 'tasks',
    tagTypes: ['Tasks'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
    endpoints: (builder) => ({
        getTasks: builder.query({
        query: () => `todos?_limit=5&_sort=id&_order=desc`,
            providesTags: (result) =>
                result ? [...result.map(({ id }) => ({ type: 'Tasks', id })),
                        { type: 'Tasks', id: 'LIST' },]
                    : [{ type: 'Tasks', id: 'LIST' }],
        }),
        getTasksByFilter: builder.query({
            query: (filter) =>
                `todos?_limit=5&${filter === 'active' ? `completed=false` : ``}${filter === 'completed' ? `completed=true` : ``}`,
            invalidatesTags: [{ type: 'Tasks', id: 'LIST' }],
        }),
        updateStatus: builder.mutation({
            query: ({id, status}) => ({
                url: `todos/${id}`,
                method: 'PATCH',
                body: {completed: status}
            }),
            invalidatesTags: [{ type: 'Tasks', id: 'LIST' }],
        }),
        createTask: builder.mutation({
            query: (title)=> ({
                url: `todos`,
                method: 'POST',
                body: {title, completed:false}
            }),
            invalidatesTags: [{ type: 'Tasks', id: 'LIST' }],
        }),
        deleteTask: builder.mutation({
            query: (id) => ({
                url: `todos/${id}`,
                method: 'DELETE'
            })
        })
    })
})

export const {
    useGetTasksQuery,
    useUpdateStatusMutation,
    useCreateTaskMutation,
    useDeleteTaskMutation,
} = tasksApi