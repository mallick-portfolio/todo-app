import React from "react";
import PropTypes from "prop-types";

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

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
InputField.defaultProps = {
  type: "text",
};

export default InputField;
