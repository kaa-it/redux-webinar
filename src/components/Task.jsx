import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Task = ({ task }) => {
  const handleDelete = () => {};

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
