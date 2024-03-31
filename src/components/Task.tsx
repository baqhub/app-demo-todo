import {ChangeEvent, FC} from "react";
import {Record} from "@baqhub/sdk";
import {useRecordByKey, useRecordHelpers} from "../baq/store";
import {TaskRecord, TaskRecordKey} from "../baq/taskRecord";


interface TaskProps {
  taskKey: TaskRecordKey;
}

export const Task: FC<TaskProps> = props => {
  const {taskKey} = props;
  const {entity, updateRecords} = useRecordHelpers();

  // Find the requested record.
  const record = useRecordByKey(taskKey);
  const {title, completed} = record.content;

  const onCompletedChange = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedRecord = TaskRecord.update(entity, record, {
      ...record.content,
      completed: e.currentTarget.checked,
    });
    updateRecords([updatedRecord]);
  };

  const onDeleteClick = () => {
    const deletedRecord = Record.delete(entity, record);
    updateRecords([deletedRecord]);
  };

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