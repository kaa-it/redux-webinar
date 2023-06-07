import { ADD_TASK } from "../tasks/actions";

export const customMiddleware = () => {
    return (store) => {
      return (next) => (action) => {
        if (typeof action === "function") {
            action(store.dispatch, store.getState);
            return;
        }
  
        return next(action);
      };
    };
};