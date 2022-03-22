import React from "react";

const InputField = ({ type, name, placeholder, handleChange, value }) => {
  return (
    <div className="form-floating mb-3">
      <input
        value={value}
        type={type}
        className="form-control"
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor={name}>{placeholder}</label>
    </div>
  );
};

export default InputField;
