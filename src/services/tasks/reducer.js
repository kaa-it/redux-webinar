import {
  ADD_TASK_SUCCESS,
  DELETE_TASK_SUCCESS,
  TASKS_LOAD_SUCCESS,
  TASKS_LOADING,
  TASKS_ERROR
} from "./actions";

const initialState = {
  tasks: [],
  loading: false,
  error: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TASKS_LOADING:
      return {
        ...state,
        loading: true,
        error: null
      };
    case TASKS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };  
    case TASKS_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: action.payload,
      };
    case ADD_TASK_SUCCESS:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TASK_SUCCESS:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};