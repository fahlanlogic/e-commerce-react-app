/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import Button from "../elements/button";
import Input from "../elements/input";
import Label from "../elements/label";
import { login } from "../services/login-services";
import { data } from "autoprefixer";

const LoginForm = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem('email', event.target.email.value);
    // localStorage.setItem('password', event.target.password.value);
    // window.location.href = "/products"
    const data = {
      username: event.target.username.value,
      password: event.target.password.value
    }
    login(data)
  }
  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current.focus()
  }, [])

  return (
    <div className="mb-6">
      <form onSubmit={handleLogin}>
        <Label htmlFor="username">Username</Label>
        <Input name="username" type="text" placeholder="Jhon Doe" ref={usernameRef}/>
        <Label htmlFor="password">Password</Label>
        <Input name="password" type="password" placeholder="*********" />
        <Button type="" className="w-full bg-blue-800 text-white">Login</Button>
      </form>
    </div>
  )
}

export default LoginForm;