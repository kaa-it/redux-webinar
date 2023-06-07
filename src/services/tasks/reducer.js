import {
  ADD_TASK_SUCCESS,
  DELETE_TASK_SUCCESS,
  TASKS_LOAD_SUCCESS,
  TASKS_LOAD_REQUEST,
  TASKS_LOAD_ERROR,
} from "./actions";

const initialState = {
  tasks: [],
  isLoading: false,
  error: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TASKS_LOAD_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case TASKS_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tasks: action.payload,
      };
    case TASKS_LOAD_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
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
