import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: 'none' | 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export const Card: React.FC<CardProps> = ({
  padding = 'md',
  fullWidth = false,
  className,
  children,
  ...props
}) => {
  const baseStyles = 'bg-white rounded-lg shadow-md border border-gray-200';
  const widthStyles = fullWidth ? 'w-full' : '';

  const mergedClassName = twMerge(
    clsx(
      baseStyles,
      paddingStyles[padding],
      widthStyles,
      className
    )
  );

  return (
    <div className={mergedClassName} {...props}>
      {children}
    </div>
  );
};
