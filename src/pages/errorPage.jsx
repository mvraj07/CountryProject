import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <h1>{`Error Page: ${error.data}`}</h1>
      <NavLink to={"/"} className="error-button">
        Go back Home
      </NavLink>
    </>
  );
};
