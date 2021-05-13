import React from 'react';

export interface InputProps {
  placeholder?: string;
  tailwindClass?: string;
  type?: 'text' | 'email' | 'number' | 'password' | 'tel' | 'url' | 'hidden' | 'search';
}

export const Input: React.FC<InputProps> = ({ placeholder = 'Type something', type = 'text', ...props }) => {
  return <input type={type} placeholder={placeholder} {...props} />;
};
