import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <center>
      <h1>Check Your URL</h1>
      <h2>{error.data}</h2>
      <NavLink to="/">
        <button>Go Home</button>
      </NavLink>
    </center>
  );
};
