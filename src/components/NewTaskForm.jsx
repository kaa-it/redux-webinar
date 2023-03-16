import { useState } from "react";

const NewTaskForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <form className="todolist__form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todolist__form-input"
        placeholder="Введите текст задачи"
        onChange={handleInputChange}
        value={inputValue}
      />
      <button type="submit" className="todolist__form-submit">
        Добавить
      </button>
    </form>
  );
};

export default NewTaskForm;
