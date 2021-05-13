import React from 'react';

export interface CheckboxProps {
  name?: 'string';
  checked?: 'boolean';
  value?: 'string';
  props?: 'any';
  disabled?: 'boolean';
}

export const Checkbox: React.FC<CheckboxProps> = ({ name, checked, value, disabled, ...props }) => {
  return <input type="checkbox" name={name} id={name} value={value} {...props} />;
};
