/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef, useState } from "react";
import Button from "../elements/button";
import Input from "../elements/input";
import Label from "../elements/label";
import { login } from "../services/login-services";
import { DarkMode } from "../../context/darkMode";

const LoginForm = () => {
  const [loginFail, setLoginFail] = useState("");
  const {isDarkMode} = useContext(DarkMode);
  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem('email', event.target.email.value);
    // localStorage.setItem('password', event.target.password.value);
    // window.location.href = "/products"
    const data = {
      username: event.target.username.value,
      password: event.target.password.value
    }
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products"
      } else {
        setLoginFail(res.response.data)
        console.log(res.response.data)
      }
    })
  }
  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current.focus()
  }, [])

  return (
    <div className="mb-6">
      <form onSubmit={handleLogin}>
        <Label htmlFor="username" className={`${isDarkMode && "text-white"}`}>Username</Label>
        <Input name="username" type="text" placeholder="Jhon Doe" ref={usernameRef}/>
        <Label htmlFor="password">Password</Label>
        <Input name="password" type="password" placeholder="*********" />
        <Button type="submit" className="w-full bg-blue-900 text-white">Login</Button>
      </form>
      {loginFail && <p className="animate-bounce text-center mt-2 text-red-500">{loginFail}</p>}
    </div>
  )
}

export default LoginForm;