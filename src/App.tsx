import {FC} from "react";
import {Header} from "./components/Header";
import {TaskList} from "./components/TaskList";
import {Login} from "./components/Login";
import {localStorageAdapter} from "@baqhub/sdk-react-dom";
import {buildAuthentication} from "./baq/authentication";
import {Store} from "./baq/store";

// Build the redirect URL from the current location.
const redirectUrl =
  window.location.origin + "?authorization_id={authorization_id}";

// Pick a storage provider for authentication data (here localStorage).
const {useAuthentication} = buildAuthentication({
  storage: localStorageAdapter,
  redirectUrl
});

// Read the "authorization_id" from the query params.
const currentUrl = new URL(window.location.href);
const authorizationId =
  currentUrl.searchParams.get("authorization_id") || undefined;

export const App: FC = () => {
  // Find the current authentication state.
  const {state, onConnectRequest, onDisconnectRequest} = useAuthentication(
    {authorizationId}
  );

  // If not authenticated, display the login page.
  if (state.status === "unauthenticated") {
    return <Login state={state} onConnectClick={onConnectRequest} />;
  }

  // Otherwise, display the app.
  return (
    <Store identity={state.identity} onDisconnectRequest={onDisconnectRequest}>
      <section className="todoapp">
        <Header />
        <TaskList />
      </section>
    </Store>
  );
};