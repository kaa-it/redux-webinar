import TasksList from "./TasksList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setUser } from "../services/auth/reducer";
import {tasksApi, useGetProductTasksQuery} from "../services/tasks/api";

const App = () => {
  const dispatch = useDispatch();

  const {isLoading, error, data: tasks} = useGetProductTasksQuery();

  useEffect(() => {
    dispatch(setUser({
      name: "Vasya",
      email: "dddd@mail.ru"
    }))
  }, []);

  if (isLoading) {
    return <h2>Загрузка...</h2>;
  }

  if (!isLoading && error) {
    return <h2>{`Ошибка: ${error}`}</h2>;
  }

  return (
    <div className="page">
      <section className="todolist">
        <TasksList />
      </section>
    </div>
  );
};

export default App;
