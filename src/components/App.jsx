import TasksList from "./TasksList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadTasks } from "../services/tasks/actions";

const App = () => {
  const dispatch = useDispatch();

  const { isLoading, error } = useSelector((store) => store.tasks);

  useEffect(() => {
    dispatch(loadTasks());
  }, [dispatch]);

  if (isLoading) {
    return <h1>Загрузка...</h1>;
  }

  if (!isLoading && error) {
    return <h1>{error}</h1>;
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
