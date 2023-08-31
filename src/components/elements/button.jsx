/* eslint-disable react/prop-types */
const Button = (props) => {
  const { children, className, type = "button", onClick = () => {} } = props;
  return (
    <button className={`h-10 px-6 font-semibold rounded-lg ${className} shadow-lg`} type={type} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button;