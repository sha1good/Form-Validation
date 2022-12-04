import { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, id, errorMessage, onChange, ...otherInputs } = props;

  const handleFocused = (event) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...otherInputs}
        onChange={onChange}
        onBlur={handleFocused}
        focused={focused.toString()}
        onFocus= {()=>otherInputs.name ==="confirmPassword" && setFocused(true)}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
