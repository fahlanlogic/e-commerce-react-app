/* eslint-disable react/prop-types */
const Label = (props) => {
  const { htmlFor, children, text } = props;
  return (
    <label htmlFor={htmlFor} className={`text-sm font-bold mb-3 ${text}`}>
      {children}
    </label>
  )
}

export default Label;