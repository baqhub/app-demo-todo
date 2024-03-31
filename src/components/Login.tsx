import {UnauthenticatedState} from "@baqhub/sdk-react";
import {FC, FormEvent, useEffect} from "react";

interface LoginProps {
  state: UnauthenticatedState;
  onConnectClick: (entity: string) => void;
}

export const Login: FC<LoginProps> = props => {
  const {state, onConnectClick} = props;
  const isConnecting = state.connectStatus !== "idle";

  useEffect(() => {
    if (state.connectStatus !== "waiting_on_flow") {
      return;
    }

    window.location.href = state.flowUrl;
  }, [state]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const entity = formData.get("entity")?.toString();
    if (!entity) {
      return;
    }

    onConnectClick(entity);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "200px",
      }}
    >
      <h1>BAQ Todos</h1>
      <form
        style={{display: "flex", gap: "12px"}}
        onSubmit={onSubmit}
      >
        <input
          type="text"
          name="entity"
          placeholder="user.host.com"
          disabled={isConnecting}
          autoFocus
        />
        <button type="submit" disabled={isConnecting}>
          Sign in
        </button>
      </form>
    </div>
  );
};