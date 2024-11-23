import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "./ShopContext";

const ErrorPage = () => {
  const { error } = useContext(ShopContext);
  return (
    <>
      {error ? (
        <div>{error}</div>
      ) : (
        <div>
          <h1>Page not found!</h1>
          <Link to="/home">Back to home page.</Link>
        </div>
      )}
    </>
  );
};

export default ErrorPage;
