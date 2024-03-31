/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import {
  BuildAuthenticationOptions,
  UseAuthenticationOptions,
  buildAuthentication as buildAuthenticationBase,
} from "@baqhub/sdk-react";
import { useCallback } from "react";
import { TaskRecord } from "./taskRecord.js";

const scopeRequest = {
  read: [TaskRecord.link],
  write: [TaskRecord.link],
};

export function buildAuthentication(options: BuildAuthenticationOptions) {
  const { useAuthentication: useAuthBase } = buildAuthenticationBase({
    ...options,
    scopeRequest,
  });

  function useAuthentication(
    redirectUrl: string,
    options: UseAuthenticationOptions,
  ) {
    const authentication = useAuthBase(options);
    const { onConnectRequest: onConnectRequestBase } = authentication;

    const onConnectRequest = useCallback(
      (entity: string) => {
        onConnectRequestBase(entity, {
          name: "BAQ Todos",
          uris: {
            redirect: redirectUrl,
          },
          scopeRequest,
        });
      },
      [onConnectRequestBase, redirectUrl],
    );

    return {
      ...authentication,
      onConnectRequest,
    };
  }

  return { useAuthentication };
}
