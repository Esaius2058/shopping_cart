import { Link, useRouteError } from "react-router-dom";

const ErrorPage = (err) => {
  const error = useRouteError();
  return (
    <>
      <div>
        <h1>Something went wrong.</h1>
        <div>{error?.message || err || "Page not found"}</div>
        <Link to="/">Back to home page.</Link>
      </div>
    </>
  );
};

export default ErrorPage;
