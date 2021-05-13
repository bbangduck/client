import React from 'react';

export interface CardProps {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};
