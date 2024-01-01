import React from "react";

const customInput = ({ label, type }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} />
    </div>
  );
};

export default customInput;
