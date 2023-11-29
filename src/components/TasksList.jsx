import Task from "./Task";
import NewTaskFrom from "./NewTaskForm";
import { useSelector } from "react-redux";
import { getTasks, hasOneTasks } from "../services/tasks/selectors";
import {useGetProductTasksQuery} from "../services/tasks/api";

const TasksList = () => {
  const {data: projectTasks} = useGetProductTasksQuery();

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
