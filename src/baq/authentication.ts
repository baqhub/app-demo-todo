/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import {
  SecureStorageAdapter,
  StorageAdapter,
  buildAuthentication as buildAuthenticationBase,
} from "@baqhub/sdk-react";
import { TaskRecord } from "./taskRecord.js";

export interface BuildAuthenticationOptions {
  storage: StorageAdapter;
  secureStorage?: SecureStorageAdapter;
  redirectUrl: string;
}

export function buildAuthentication(options: BuildAuthenticationOptions) {
  const { storage, secureStorage, redirectUrl } = options;
  return buildAuthenticationBase({
    storage,
    secureStorage,
    app: {
      name: "BAQ Todos",
      uris: {
        redirect: redirectUrl,
      },
      scopeRequest: {
        read: [TaskRecord.link],
        write: [TaskRecord.link],
      },
    },
  });
}
