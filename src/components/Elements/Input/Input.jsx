const Input = (props) => {
  const {type, placeholder, name, value, required, onChange} = props;
  return (
    <input
      type={type}
      className="text-sm border rounded w-full py-2 px-3 text-slate-700"
      placeholder={placeholder}
      name={name}
      id={name}
      value={value} 
      required={required} 
      onChange={onChange}
    />
  );
};
export default Input;
