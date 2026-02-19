export const ErrorPage = () => {
<<<<<<< HEAD
  const error = useRouteError();

  return (
    <>
      <h1>{`Error Page: ${error.data}`}</h1>
      <NavLink to={"/"} className="error-button">
        Go back Home
      </NavLink>
    </>
  );
=======
  return <h1>Error page</h1>;
>>>>>>> main
};
