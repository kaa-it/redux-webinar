import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "./services/store";
import { Provider } from "react-redux";

// const store = configureStore({
//   tasks: {
//     tasks: [
//       {
//         content: "Задача 1",
//         id: 1,
//       },
//       {
//         content: "Задача 2",
//         id: 2,
//       },
//       {
//         content: "Задача 3",
//         id: 3,
//       },
//     ],
//   }
// });

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
