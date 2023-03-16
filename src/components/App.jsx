import { useEffect } from "react";
import TasksList from "./TasksList";
import { useDispatch } from "react-redux";
import { loadTasks } from "../services/tasks/actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasks());
  }, [dispatch]);

  return (
    <div className="page">
      <section className="todolist">
        <TasksList />
      </section>
    </div>
  );
};

export default App;
