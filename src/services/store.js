import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { customMiddleware } from "./middleware/customMiddleware";
import { rootReducer } from "./reducer";
import thunkMiddleware from "redux-thunk";

export const configureStore = (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(customMiddleware(), thunkMiddleware))
  );

  return store;
};
