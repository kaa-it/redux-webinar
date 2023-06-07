import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    deleteTaskById,
    getProjectTasks,
    addTask as addTaskApi,
  } from "../../utils/todoist-api";

  
export const addTask = createAsyncThunk(
    'tasks/addTask',
    async (payload) => {
        const response = await addTaskApi(payload);
        return response;
    }
);

export const deleteTask = createAsyncThunk(
    'tasks/deleteTask',
    async (payload) => {
        const response = await deleteTaskById(payload);
        return response;
    }
);
  
export const loadTasks = createAsyncThunk(
    'tasks/loadTasks',
    async (thunkAPI) => {
        try {
            const response = getProjectTasks();
            return response;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
);