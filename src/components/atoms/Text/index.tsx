import React from 'react';

export interface TextProps {
  label: string;
  size?: number;
  color?: string;
  weight?: number;
  family?: string;
  transform?: string;
}

export const Text: React.FC<TextProps> = ({
  label = 'Text',
  size = 12,
  color = '#ff6100',
  weight = 600,
  family,
  transform = 'none',
  ...props
}) => {
  return (
    <p
      style={{
        fontSize: size,
        color,
        fontWeight: weight,
        fontFamily: family,
      }}
      {...props}
    >
      {label}
    </p>
  );
};
