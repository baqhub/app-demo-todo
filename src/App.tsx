import {FC} from "react";
import {Header} from "./components/Header";
import {TaskList} from "./components/TaskList";

export const App: FC = () => {
  return (
    <section className="todoapp">
      <Header />
      <TaskList />
    </section>
  );
};