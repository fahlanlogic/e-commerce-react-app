/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/darkMode";
import Button from "../elements/button";

/* eslint-disable react/no-unescaped-entities */
const AuthLayout = (props) => {
  const { children, title, type } = props;
  const {isDarkMode, setIsDarkMode} = useContext(DarkMode);
  
  return (
    <div className={`auth-layout flex justify-center min-h-screen items-center ${isDarkMode && "bg-black"}`}>
      <div className="w-full max-w-md">
        <Button className={`${isDarkMode ? "bg-white text-blue-900" : "bg-blue-900 text-white"} absolute top-2 right-2`} onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "Light" : "Dark"}
        </Button>
        <h1 className={`font-bold text-5xl text-blue-900 text-center mb-3 ${isDarkMode && "text-white"}`}>{title}</h1>
        <p className={`text-slate-800 mb-6 text-center ${isDarkMode && "text-white"}`}>Please fill the columns</p>
        {children}
        <p className={`text-center text-sm mt-6 ${isDarkMode && "text-white"}`}>
          
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