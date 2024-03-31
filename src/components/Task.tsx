import {FC} from "react";

interface TaskProps {
  title: string;
  completed: boolean;
}

export const Task: FC<TaskProps> = props => {
  const {title, completed} = props;

  const onCompletedChange = () => console.log("Completed!");
  const onDeleteClick = () => console.log("Deleted!");

  return (
    <li className={completed ? "completed" : undefined}>
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          checked={completed}
          onChange={onCompletedChange}
        />
        <label>{title}</label>
        <button className="destroy" onClick={onDeleteClick} />
      </div>
    </li>
  );
};