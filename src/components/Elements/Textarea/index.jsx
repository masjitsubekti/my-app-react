import Textarea from "./Textarea";
import Label from "./Label";

const TextareaForm = (props) => {
    const {htmlFor, label, name, placeholder, rows, values, onChange} = props;
  return (
    <div className="mb-6">
      <Label htmlFor={htmlFor}>{label}</Label>
      <Textarea name={name} placeholder={placeholder} rows={rows} onChange={onChange}>
        {values}
      </Textarea>
    </div>
  );
}
export default TextareaForm;