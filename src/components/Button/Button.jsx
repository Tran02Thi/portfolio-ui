import React from 'react';
import './Button.css';

const Button = ({ href, children, className = '', ...props }) => {
  const baseClass = 'button';
  const combinedClass = `${baseClass} ${className}`.trim();
  
  if (href) {
    return (
      <a 
        href={href} 
        className={`${combinedClass} button-link`}
        {...props}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button 
      className={combinedClass}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 