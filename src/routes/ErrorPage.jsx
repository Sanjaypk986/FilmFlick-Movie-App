import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="container mx-auto w-3/4 md:w-1/2 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl md:text-6xl my-3">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}