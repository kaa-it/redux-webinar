import { configureStore as createStore } from "@reduxjs/toolkit";
import { reducer as authReducer } from "./auth/reducer";
import {tasksApi} from "./tasks/api";

export const configureStore = (initialState) => {
    const store = createStore({
        reducer: {
            [tasksApi.reducerPath]: tasksApi.reducer,
            auth: authReducer, 
        },
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware().concat(tasksApi.middleware)
        }
    });

    return store;
};