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
  "c817a5c9ed73c2fa3aeb6708d5e83a92a9637d6ec3a029469a84378e6ae9fd6c",
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
