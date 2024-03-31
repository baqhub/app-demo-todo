import {FC} from "react";
import {Task} from "./Task";

export const TaskList: FC = () => {
  return (
    <main className="main">
      <ul className="todo-list">
        <Task title="Setup the project" completed={true} />
        <Task title="Build the UI" completed={false} />
      </ul>
    </main>
  );
};