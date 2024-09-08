const Textarea = (props) => {
    const {rows, placeholder, name, children, values, onChange} = props;
  return (
    <textarea
      className="text-sm border rounded w-full py-2 px-3 text-slate-700"
      placeholder={placeholder}
      name={name}
      rows={rows}
      id={name}
      onChange={onChange}
    >{values}</textarea>
  );
};
export default Textarea;
