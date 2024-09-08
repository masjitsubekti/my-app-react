import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
  const { htmlFor, label, name, type, placeholder, value, required, onChange } =
    props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={onChange}
      />
    </div>
  );
};
export default InputForm;
