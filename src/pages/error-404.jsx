import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
  const error = useRouteError()
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-md text-center">
        <h1 className="font-bold text-6xl text-slate-800 mb-7">Oops!</h1>
        <p>Sorry, an unexpected error has occured</p>
        <p>{error.statusText || error.message}</p>
      </div>
    </div>
  )
}

export default ErrorPage