import React from 'react';
import { Loader2 } from 'lucide-react';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  children,
  disabled,
  className = '',
  ...props
}) => {
  const buttonClasses = [
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    fullWidth && 'btn-full-width',
    loading && 'btn-loading',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={buttonClasses}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading ? (
        <Loader2 className="btn-spinner" size={size === 'sm' ? 16 : size === 'md' ? 20 : 24} />
      ) : (
        <>
          {leftIcon && <span className="btn-icon btn-icon-left">{leftIcon}</span>}
          {children && <span className="btn-text">{children}</span>}
          {rightIcon && <span className="btn-icon btn-icon-right">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  icon: React.ReactNode;
  'aria-label': string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  variant = 'default',
  size = 'md',
  icon,
  className = '',
  ...props
}) => {
  const buttonClasses = [
    'icon-btn',
    `icon-btn-${variant}`,
    `icon-btn-${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={buttonClasses} {...props}>
      {icon}
    </button>
  );
};
