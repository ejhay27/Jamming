import React, { forwardRef, useState } from 'react';
import { Eye, EyeOff, AlertCircle } from 'lucide-react';
import './Input.css';

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      error,
      hint,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    const wrapperClasses = [
      'input-wrapper',
      fullWidth && 'input-full-width',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const inputClasses = [
      'input',
      leftIcon && 'input-with-left-icon',
      rightIcon && 'input-with-right-icon',
      error && 'input-error',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={wrapperClasses}>
        {label && (
          <label htmlFor={inputId} className="input-label">
            {label}
          </label>
        )}
        <div className="input-container">
          {leftIcon && <span className="input-icon input-icon-left">{leftIcon}</span>}
          <input
            ref={ref}
            id={inputId}
            className={inputClasses}
            aria-invalid={!!error}
            aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
            {...props}
          />
          {rightIcon && <span className="input-icon input-icon-right">{rightIcon}</span>}
        </div>
        {error && (
          <div id={`${inputId}-error`} className="input-error-message" role="alert">
            <AlertCircle size={14} />
            <span>{error}</span>
          </div>
        )}
        {hint && !error && (
          <div id={`${inputId}-hint`} className="input-hint">
            {hint}
          </div>
        )}
      </div>
    );
  }
);

TextField.displayName = 'TextField';

export interface PasswordFieldProps extends Omit<TextFieldProps, 'type' | 'rightIcon'> {}

export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
  ({ ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <TextField
        ref={ref}
        type={showPassword ? 'text' : 'password'}
        rightIcon={
          <button
            type="button"
            className="input-icon-button"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        }
        {...props}
      />
    );
  }
);

PasswordField.displayName = 'PasswordField';
