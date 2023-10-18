import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className=" d-flex justify-content-center align-items-center w-100 tinggi flex-column">
      <h1 className=" fs-1">Oops!</h1>
      <p className="fs-5">Sorry, an unexpected error has occured</p>
      <p className=" fs-5">{error.statusText || error.message}</p>
    </div>
  );
};
export default ErrorPage;
