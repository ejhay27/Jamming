import React from 'react';
import { Loader2, AlertCircle, Music2, Wifi, WifiOff, Search, Users } from 'lucide-react';
import { Button } from '../Button/Button';
import './States.css';

export interface LoadingStateProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const LoadingState: React.FC<LoadingStateProps> = ({
  message = 'Loading...',
  size = 'md',
}) => {
  return (
    <div className="state-container" role="status" aria-live="polite">
      <Loader2
        className="state-spinner"
        size={size === 'sm' ? 24 : size === 'md' ? 40 : 56}
      />
      {message && <p className="state-message">{message}</p>}
    </div>
  );
};

export interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  variant?: 'default' | 'queue' | 'search' | 'members';
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  action,
  variant = 'default',
}) => {
  const getDefaultIcon = () => {
    switch (variant) {
      case 'queue':
        return <Music2 size={48} />;
      case 'search':
        return <Search size={48} />;
      case 'members':
        return <Users size={48} />;
      default:
        return null;
    }
  };

  return (
    <div className="state-container empty-state">
      <div className="empty-state-icon">
        {icon || getDefaultIcon()}
      </div>
      <h3 className="empty-state-title">{title}</h3>
      {description && <p className="empty-state-description">{description}</p>}
      {action && (
        <Button variant="secondary" size="md" onClick={action.onClick}>
          {action.label}
        </Button>
      )}
    </div>
  );
};

export interface ErrorStateProps {
  title?: string;
  message: string;
  retry?: () => void;
  variant?: 'default' | 'network' | 'server';
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title = 'Something went wrong',
  message,
  retry,
  variant = 'default',
}) => {
  const icon = variant === 'network' ? <WifiOff size={48} /> : <AlertCircle size={48} />;

  return (
    <div className="state-container error-state" role="alert">
      <div className="error-state-icon">{icon}</div>
      <h3 className="error-state-title">{title}</h3>
      <p className="error-state-message">{message}</p>
      {retry && (
        <Button variant="secondary" size="md" onClick={retry}>
          Try Again
        </Button>
      )}
    </div>
  );
};

export interface ConnectionIndicatorProps {
  connected: boolean;
  label?: string;
}

export const ConnectionIndicator: React.FC<ConnectionIndicatorProps> = ({
  connected,
  label,
}) => {
  return (
    <div
      className={`connection-indicator ${connected ? 'connected' : 'disconnected'}`}
      role="status"
      aria-label={connected ? 'Connected' : 'Disconnected'}
    >
      {connected ? <Wifi size={14} /> : <WifiOff size={14} />}
      {label && <span>{label}</span>}
    </div>
  );
};
