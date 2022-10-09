import React from "react";

const From = ({ name, placeholder, type, setForm, form }) => {
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="auth__form-container_fields-content_input">
      <label htmlFor={name}>{placeholder}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default From;
