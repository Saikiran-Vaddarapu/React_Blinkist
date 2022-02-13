import React from 'react';
import './Button.css';

const Button = ({ children, ...rest }) => {
  return (
    <button className="button" {...rest}>
      { children }
      {rest.label }
    </button>
  )
}

export default Button;