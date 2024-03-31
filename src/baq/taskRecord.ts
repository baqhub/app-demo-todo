/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import {
  IO,
  Record,
  RecordKey,
  RecordLink,
  RecordType,
  SchemaIO,
  VersionHash,
} from "@baqhub/sdk";

//
// Model.
//

export type TaskRecordContent = { title: string; completed: boolean };

const RTaskRecordContent: IO.RType<TaskRecordContent> = IO.object({
  title: SchemaIO.string({ maxLength: 128 }),
  completed: SchemaIO.boolean(),
});

const [taskRecordType, RTaskRecordType] = RecordType.full(
  "types.baq.dev",
  "fe727f22b5c34fb185a370449e4f0128",
  "2c2363602c496a6ac5d692c6332d246a8d4492d74ff4fe539ea15a36bec0e899",
  RTaskRecordContent,
);

const RTaskRecord = Record.io(
  taskRecordType,
  RTaskRecordType,
  RTaskRecordContent,
);

export interface TaskRecord extends IO.TypeOf<typeof RTaskRecord> {}
export const TaskRecord = Record.ioClean<TaskRecord>(RTaskRecord);
export type TaskRecordLink = RecordLink<TaskRecord>;
export type TaskRecordKey = RecordKey<TaskRecord>;
export type TaskVersionHash = VersionHash<TaskRecord>;
