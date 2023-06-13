import React from "react"

import './styles.css'

const Input = ({ id, type = 'text', placeholder, label, ...rest }) => {
  return (
    <>
      <label htmlFor={id} className="form-label"
      >
        {label}
      </label>
      <input
        id={id}
        className="form-input"
        type={type}
        placeholder={placeholder}
        {...rest}
      />
    </>
  )
}
export default Input