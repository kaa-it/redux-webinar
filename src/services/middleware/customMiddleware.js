import { ADD_TASK, DELETE_TASK } from "../tasks/actions";

export const customMiddleware = () => {
  return (store) => {
    return (next) => (action) => {
      console.log("store after dispatch", store);
      console.log("will dispatch", action);
      console.log("dispatch ", next);

      return next(action);
    };
  };
};
