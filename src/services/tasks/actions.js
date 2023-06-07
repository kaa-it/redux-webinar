import {
    deleteTaskById,
    getProjectTasks,
    addTask as addTaskApi,
  } from "../../utils/todoist-api";
  
export const ADD_TASK_SUCCESS = "ADD_TASK_SUCCESS";
export const DELETE_TASK_SUCCESS = "DELETE_TASK_SUCCESS";
export const TASKS_LOAD_SUCCESS = "TASKS_LOAD_SUCCESS";
export const TASKS_LOADING = "TASKS_LOADING";
export const TASKS_ERROR = "TASKS_ERROR";
  
  export const addTask = (payload) => (dispatch) => {
    return addTaskApi(payload).then((res) => {
      dispatch({
        type: ADD_TASK_SUCCESS,
        payload: res,
      });
    });
  };
  
  export const deleteTask = (payload) => (dispatch) => {
    return deleteTaskById(payload).then((res) => {
      dispatch({
        type: DELETE_TASK_SUCCESS,
        payload: res,
      });
    });
  };
  
  export const loadTasks = (payload) => (dispatch) => {
    dispatch({
        type: TASKS_LOADING,
    });
    return getProjectTasks()
    .then((res) => {
      dispatch({
        type: TASKS_LOAD_SUCCESS,
        payload: res,
      });
    })
    .catch(err => {
        dispatch({
            type: TASKS_ERROR,
            payload: err.message
        });
    });
};