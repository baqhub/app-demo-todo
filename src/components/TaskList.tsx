import {FC} from "react";
import {Task} from "./Task";
import {Q, Record} from "@baqhub/sdk";
import {useRecordHelpers, useRecordsQuery} from "../baq/store";
import {TaskRecord} from "../baq/taskRecord";

export const TaskList: FC = () => {
  const {entity} = useRecordHelpers();
  const {records} = useRecordsQuery({
    pageSize: 100,
    filter: Q.and(Q.author(entity), Q.type(TaskRecord)),
    sort: ["createdAt", "descending"],
  });

  return (
    <main className="main">
      <ul className="todo-list">
        {records.map(Record.toKey).map(taskKey => (
          <Task key={taskKey} taskKey={taskKey} />
        ))}
      </ul>
    </main>
  );
};