import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import {useDeleteTaskByIdMutation} from "../services/tasks/api";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [deleteTask] = useDeleteTaskByIdMutation();

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <article className="todolist__item">
      <span className="todolist__item-text">{task.content}</span>
      <FontAwesomeIcon
        className="todolist__item-del"
        icon={faTrash}
        onClick={handleDelete}
        inverse
      />
    </article>
  );
};

export default Task;
