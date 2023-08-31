/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import Button from "../elements/button";
import Input from "../elements/input";
import Label from "../elements/label";

const LoginForm = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem('email', event.target.email.value);
    localStorage.setItem('password', event.target.password.value);
    window.location.href = "/products"
  }
  const emailRef = useRef(null);
  useEffect(() => {
    emailRef.current.focus()
  }, [])

  return (
    <div className="mb-6">
      <form onSubmit={handleLogin}>
        <Label htmlFor="email">Email</Label>
        <Input name="email" type="email" placeholder="example@gmail.com" ref={emailRef}/>
        <Label htmlFor="password">Password</Label>
        <Input name="password" type="password" placeholder="*********" />
        <Button type="" className="w-full bg-blue-800 text-white">Login</Button>
      </form>
    </div>
  )
}

export default LoginForm;