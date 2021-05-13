import React from 'react';

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  borderRadius?: string;
  boxShadow?: string;
  size?: 'small' | 'medium' | 'large' | 'extra';
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  backgroundColor,
  borderRadius,
  size,
  label,
  boxShadow,
  ...props
}: ButtonProps): React.ReactElement => {
  return (
    <button type="button" style={{ backgroundColor, borderRadius, boxShadow, outline: 'none' }} {...props}>
      {label}
    </button>
  );
};
