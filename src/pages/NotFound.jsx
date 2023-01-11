import { Link, useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="container text-center py-5">
      <h1 className="">404</h1>
      <p className="text-primary">Page not found</p>
      <p>{error.statusText || error.message}</p>
      <Link to="/">Volver al Home</Link>
    </div>
  );
};

export default NotFound;
