import {
  ADD_TASK_SUCCESS,
  DELETE_TASK_SUCCESS,
  TASKS_LOAD_SUCCESS,
} from "./actions";

const initialState = {
  tasks: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TASKS_LOAD_SUCCESS:
      return {
        ...state,
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
