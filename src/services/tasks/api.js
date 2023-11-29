import {fetchBaseQuery} from "@reduxjs/toolkit/query";
import {todoistApiConfig} from "../../utils/todoist-api";
import { createApi } from '@reduxjs/toolkit/query/react'

export const tasksApi = createApi({
    reducerPath: "tasksApi",
    baseQuery: fetchBaseQuery({
        baseUrl: todoistApiConfig.baseUrl,
        prepareHeaders: (headers) => {
            for (let [key, value] of Object.entries(todoistApiConfig.headers)) {
                headers.set(key, value);
            }
            return headers;
        }
    }),
    endpoints: (builder) => ({
      getProductTasks: builder.query({
          query: () => "/tasks?project_id=2309751576",
          providesTags: (result) => {
              return result ? [
                  ...result.map(({id}) => ({type: "Tasks", id})),
                  { type: "Tasks", id: "LIST" }
              ] : [
                  { type: "Tasks", id: "LIST" }
              ]
          }
      }),
      addTask: builder.mutation({
          query: (text) => ({
              url: "/tasks",
              method: "POST",
              body: JSON.stringify({
                  content: text,
                  project_id: 2309751576,
              }),
          }),
          invalidatesTags: [{ type: "Tasks", id: "LIST" }]
      }),
      deleteTaskById: builder.mutation({
          query: (id) => {
              console.log("id", id);
              return {
                  url: "/tasks/" + id,
                  method: "DELETE",
              }
          },
          invalidatesTags: [{ type: "Tasks", id: "LIST" }]
      })
    })
});

export const { useGetProductTasksQuery, useAddTaskMutation, useDeleteTaskByIdMutation } = tasksApi;