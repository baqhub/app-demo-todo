import {FC, FormEvent} from "react";

export const Header: FC = () => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Read the form data and reset it.
    const form = e.currentTarget;
    const formData = new FormData(form);
    form.reset();

    // Read the task title.
    const newTaskTitle = formData.get("task")?.toString();
    if (!newTaskTitle) {
      return;
    }

    console.log("Got task:", newTaskTitle);
  };

  return (
    <header className="header">
      <h1>BAQ Todos</h1>
      <form onSubmit={onSubmit}>
        <input
          name="task"
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
        />
      </form>
    </header>
  );
};