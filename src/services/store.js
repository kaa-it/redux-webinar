import { configureStore as createStore } from "@reduxjs/toolkit";
import { reducer as tasksReducer } from "./tasks/reducer";
import { reducer as authReducer } from "./auth/reducer";

export const configureStore = (initialState) => {
    const store = createStore({
        reducer: {
            tasks: tasksReducer,
            auth: authReducer, 
        },
        preloadedState: initialState,
    });

    return store;
};