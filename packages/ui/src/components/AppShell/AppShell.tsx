import React from 'react';
import './AppShell.css';

export interface AppShellProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  sidebar?: React.ReactNode;
  className?: string;
}

export const AppShell: React.FC<AppShellProps> = ({
  children,
  header,
  sidebar,
  className = '',
}) => {
  return (
    <div className={`app-shell ${className}`}>
      {header && <header className="app-shell-header">{header}</header>}
      <div className="app-shell-body">
        {sidebar && <aside className="app-shell-sidebar">{sidebar}</aside>}
        <main className="app-shell-main">{children}</main>
      </div>
    </div>
  );
};

export interface AppHeaderProps {
  title?: string;
  logo?: React.ReactNode;
  left?: React.ReactNode;
  right?: React.ReactNode;
  className?: string;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  title,
  logo,
  left,
  right,
  className = '',
}) => {
  return (
    <div className={`app-header ${className}`}>
      <div className="app-header-left">
        {logo && <div className="app-header-logo">{logo}</div>}
        {title && <h1 className="app-header-title">{title}</h1>}
        {left && <div className="app-header-actions">{left}</div>}
      </div>
      {right && <div className="app-header-right">{right}</div>}
    </div>
  );
};
