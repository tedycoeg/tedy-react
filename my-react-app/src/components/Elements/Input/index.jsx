import { forwardRef } from "react";
import Label from "./Labels";
import Input from "./input";

const InputForm = forwardRef((props, ref) => {
  const { tittle, name, type, placeholder, value, onChange } = props;
  return (
    <div className="mb-2">
      <Label htmlFor={name}>{tittle}</Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        ref={ref}
      ></Input>
    </div>
  );
});

export default InputForm;
