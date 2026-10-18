import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { IconButton } from '../Button/Button';
import './Dialog.css';

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  showClose?: boolean;
}

export const Dialog: React.FC<DialogProps> = ({
  open,
  onClose,
  title,
  children,
  size = 'md',
  showClose = true,
}) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="dialog-overlay" onClick={onClose} role="presentation">
      <div
        className={`dialog dialog-${size}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'dialog-title' : undefined}
        onClick={(e) => e.stopPropagation()}
      >
        {(title || showClose) && (
          <div className="dialog-header">
            {title && (
              <h2 id="dialog-title" className="dialog-title">
                {title}
              </h2>
            )}
            {showClose && (
              <IconButton
                icon={<X size={20} />}
                variant="ghost"
                size="sm"
                onClick={onClose}
                aria-label="Close dialog"
              />
            )}
          </div>
        )}
        <div className="dialog-content">{children}</div>
      </div>
    </div>
  );
};

export interface ConfirmDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: 'default' | 'danger';
  loading?: boolean;
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  open,
  onClose,
  onConfirm,
  title,
  message,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  variant = 'default',
  loading = false,
}) => {
  return (
    <Dialog open={open} onClose={onClose} size="sm" title={title}>
      <p className="confirm-message">{message}</p>
      <div className="confirm-actions">
        <button
          className="btn btn-secondary btn-md"
          onClick={onClose}
          disabled={loading}
        >
          {cancelLabel}
        </button>
        <button
          className={`btn btn-md ${variant === 'danger' ? 'btn-danger' : 'btn-primary'}`}
          onClick={onConfirm}
          disabled={loading}
        >
          {loading ? 'Processing...' : confirmLabel}
        </button>
      </div>
    </Dialog>
  );
};
