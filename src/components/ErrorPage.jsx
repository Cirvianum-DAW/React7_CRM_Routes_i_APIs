import React from "react";
import { useRouteError } from `react-router-dom`;

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-red-600">Error</h1>
      <p className="text-xl text-red-600">{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
