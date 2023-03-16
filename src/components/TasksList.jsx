import Task from "./Task";
import NewTaskFrom from "./NewTaskForm";

const TasksList = () => {
  const projectTasks = [
    {
      content: "Задача 1",
      id: 1,
    },
    {
      content: "Задача 2",
      id: 2,
    },
    {
      content: "Задача 3",
      id: 3,
    },
  ];

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
