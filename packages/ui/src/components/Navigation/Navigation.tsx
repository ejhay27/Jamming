import React from 'react';
import './Navigation.css';

export interface NavigationItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
  badge?: number | string;
  className?: string;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  icon,
  label,
  active = false,
  onClick,
  badge,
  className = '',
}) => {
  const classes = [
    'nav-item',
    active && 'nav-item-active',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} onClick={onClick} aria-current={active ? 'page' : undefined}>
      <span className="nav-item-icon">{icon}</span>
      <span className="nav-item-label">{label}</span>
      {badge !== undefined && <span className="nav-item-badge">{badge}</span>}
    </button>
  );
};

export interface NavigationProps {
  children: React.ReactNode;
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ children, className = '' }) => {
  return (
    <nav className={`navigation ${className}`} aria-label="Main navigation">
      {children}
    </nav>
  );
};
