import {
  deleteTaskById,
  getProjectTasks,
  addTask as addTaskApi,
} from "../../utils/todoist-api";

export const ADD_TASK_SUCCESS = "ADD_TASK_SUCCESS";
export const DELETE_TASK_SUCCESS = "DELETE_TASK_SUCCESS";
export const TASKS_LOAD_SUCCESS = "TASKS_LOAD_SUCCESS";
export const TASKS_LOAD_REQUEST = "TASKS_LOAD_REQUEST";
export const TASKS_LOAD_ERROR = "TASKS_LOAD_ERROR";

export const addTask = (payload) => (dispatch) => {
  return addTaskApi(payload).then((res) => {
    dispatch({
      type: ADD_TASK_SUCCESS,
      payload: res,
    });
  });
};

export const deleteTask = (payload) => (dispatch) => {
  return deleteTaskById(payload).then(() => {
    dispatch({
      type: DELETE_TASK_SUCCESS,
      payload,
    });
  });
};

export const loadTasks = (payload) => (dispatch) => {
  dispatch({
    type: TASKS_LOAD_REQUEST,
    payload: true,
  });
  return getProjectTasks()
    .then((res) => {
      dispatch({
        type: TASKS_LOAD_SUCCESS,
        payload: res,
      });
    })
    .catch((err) => {
      dispatch({
        type: TASKS_LOAD_ERROR,
        payload: err.message,
      });
    });
};
