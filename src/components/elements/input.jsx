/* eslint-disable react/display-name */
import { forwardRef } from "react";

/* eslint-disable react/prop-types */
const Input = forwardRef((props, ref) => {
  const { type, placeholder, name } = props;
  return (
    <input type={type} className="w-full rounded-lg border text-sm px-3 py-2 mb-4 text-black font-semibold placeholder: opacity-50" placeholder={placeholder} name={name} id={name} ref={ref}/>
  )
});

export default Input;