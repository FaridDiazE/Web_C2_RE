import React from "react";
import "./InputAddMedia.css";

export default function MedialInput({
  label,
  withLabel = true,
  type,
  placeholder,
  customClassInput
}) {
  return (
    <>
      {withLabel && (
        <label htmlFor="input" className="form-label">
          {label}
        </label>
      )}
      <input type={type} placeholder={placeholder} id="form-control" className={customClassInput} />
      
    </>
  );
}
