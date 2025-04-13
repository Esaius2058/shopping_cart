import { Link, useRouteError } from "react-router-dom";

const ErrorPage = (err) => {
  const error = useRouteError();
  return (
    <div className="error-page">
      <div className="error-container">
        <h1>404</h1>
        <div>{error?.message || "The page you are looking for doesn't exist or has been moved. Please go back to the homepage"}</div>
        <Link to="/"><button className="home-button">Go back home</button></Link>
      </div>
    </div>
  );
};

export default ErrorPage;
