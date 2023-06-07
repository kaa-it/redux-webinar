import TasksList from "./TasksList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadTasks } from "../services/tasks/actions";

const App = () => {
  const dispatch = useDispatch();

  const {loading, error} = useSelector(store => store.tasks);

  useEffect(() => {
    dispatch(loadTasks())
  }, []);

  if (loading) {
    return <h2>Загрузка...</h2>;
  }

  if (!loading && error) {
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
