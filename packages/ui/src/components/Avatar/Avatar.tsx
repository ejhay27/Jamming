import React from 'react';
import './Avatar.css';

export interface AvatarProps {
  src?: string;
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  online?: boolean;
  className?: string;
}

const getInitials = (name: string): string => {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
};

const stringToColor = (str: string): string => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = hash % 360;
  return `hsl(${hue}, 50%, 40%)`;
};

export const Avatar: React.FC<AvatarProps> = ({
  src,
  name,
  size = 'md',
  online,
  className = '',
}) => {
  const classes = ['avatar', `avatar-${size}`, className].filter(Boolean).join(' ');
  const initials = getInitials(name);
  const bgColor = stringToColor(name);

  return (
    <div className={classes} title={name}>
      {src ? (
        <img src={src} alt={name} className="avatar-image" />
      ) : (
        <span className="avatar-initials" style={{ backgroundColor: bgColor }}>
          {initials}
        </span>
      )}
      {online !== undefined && (
        <span
          className={`avatar-status ${online ? 'avatar-status-online' : 'avatar-status-offline'}`}
        />
      )}
    </div>
  );
};

export interface AvatarGroupProps {
  avatars: Array<{ src?: string; name: string; online?: boolean }>;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  avatars,
  max = 5,
  size = 'md',
}) => {
  const visibleAvatars = avatars.slice(0, max);
  const overflow = avatars.length - max;

  return (
    <div className="avatar-group">
      {visibleAvatars.map((avatar, index) => (
        <Avatar
          key={index}
          src={avatar.src}
          name={avatar.name}
          size={size}
          online={avatar.online}
          className="avatar-group-item"
        />
      ))}
      {overflow > 0 && (
        <div className={`avatar avatar-${size} avatar-overflow`}>
          <span className="avatar-overflow-text">+{overflow}</span>
        </div>
      )}
    </div>
  );
};
