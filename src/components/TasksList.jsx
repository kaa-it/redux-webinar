import Task from "./Task";
import NewTaskFrom from "./NewTaskForm";
import { useSelector } from "react-redux";
import { getTasks } from "../services/tasks/selectors";

const TasksList = () => {
  const projectTasks = useSelector(getTasks);

  return (
    <div className="todolist__list">
      <NewTaskFrom />
      <div className="todolist__tasks">
        {projectTasks.map((task) => (
          <Task task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};

export default TasksList;
