import {FC, FormEvent} from "react";
import {useRecordHelpers} from "../baq/store";
import {TaskRecord} from "../baq/taskRecord";

export const Header: FC = () => {
  const {entity, updateRecords} = useRecordHelpers();

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

    // Create the new task record.
    const taskRecord = TaskRecord.new(entity, {
      title: newTaskTitle,
      completed: false,
    });
    updateRecords([taskRecord]);
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