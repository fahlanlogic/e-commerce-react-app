/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { forwardRef } from "react";
import Input from "../elements/input";
import Label from "../elements/label"

const InputForm = forwardRef((props, ref) => {
  const { children, type, placeholder, name } = props;

  return (
    <div className="mb-6">
      <Label htmlFor={name}>{children}</Label>
      <Input name={name} type={type} placeholder={placeholder} ref={ref} />
    </div>
  )
})

export default InputForm;