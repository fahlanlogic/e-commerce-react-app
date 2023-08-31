/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-md">
        <h1 className="font-bold text-5xl text-blue-900 text-center mb-3">{title}</h1>
        <p className="text-slate-800 mb-6 text-center">Please fill the columns</p>
        {children}
        <p className="text-center text-sm mt-6">
          
          {/* use if/else  */}
          {/* <Navigation type={type}></Navigation> */}

          {/* use ternary operator */}
          {type === "login" ? "Don't have account? " : "Already have account? "}
          
          {type === "login" && (
            <Link to="/register" className="font-bold text-blue-800">Register</Link>
          )}
          
          {type === "register" && (
            <Link to="/login" className="font-bold text-blue-800">Login</Link>
          )}
        </p>
      </div> 
    </div>
  )
}

// const Navigation = ({type}) => {
//   if (type === "login") {
//     return(
//       <p className="text-center text-sm mt-6">
//         Don't have account? {" "}
//         <Link to="/register" className="font-bold text-blue-800">Register</Link>
//       </p>
//     )
//   } else {
//     return(
//       <p className="text-center text-sm mt-6">
//         Already have account? {" "}
//         <Link to="/login" className="font-bold text-blue-800">Login</Link>
//       </p>
//     )
//   }
// }


export default AuthLayout;