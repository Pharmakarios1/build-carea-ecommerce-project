import React from "react";

export const Button = ({
  label,
  onClick,
  type,
  className = "",
  disabled = false,
  icon,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`button ${className}`}
      disabled={disabled}
      icon={icon}
    >
      {label}
    </button>
  );
};
