/* eslint-disable react/prop-types */
import Button from "../elements/button";
import Input from "../elements/input";
import Label from "../elements/label";

const RegisterForm = () => {
  return (
    <div className="mb-6">
      <form action="">
        <Label htmlFor="fullname">Fullname</Label>
        <Input name="fullname" type="text" placeholder="Fahdi Alan" />
        <Label htmlFor="email">Email</Label>
        <Input name="email" type="email" placeholder="example@gmail.com" />
        <Label htmlFor="password">Password</Label>
        <Input name="password" type="password" placeholder="*********" />
        <Label htmlFor="password">Confirm Password</Label>
        <Input name="password" type="password" placeholder="*********" />
        <Button className="w-full bg-blue-800 text-white">Register</Button>
      </form>
    </div>
  )
}

export default RegisterForm;