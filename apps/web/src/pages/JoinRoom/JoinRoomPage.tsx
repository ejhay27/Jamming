import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, LogIn, Hash } from 'lucide-react';
import { Button, TextField, PasswordField } from '@jamming/ui';
import { joinRoomSchema } from '@jamming/validation';
import './JoinRoomPage.css';

export const JoinRoomPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    roomCode: '',
    password: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    try {
      joinRoomSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error: any) {
      const fieldErrors: Record<string, string> = {};
      error.errors?.forEach((err: any) => {
        const field = err.path[0] as string;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    
    // TODO: Call backend API to join room
    // For now, simulate API call
    setTimeout(() => {
      setLoading(false);
      // Navigate to room (placeholder)
      navigate('/');
    }, 1000);
  };

  return (
    <div className="join-room-page page">
      <header className="join-room-header">
        <button
          className="back-btn"
          onClick={() => navigate('/')}
          aria-label="Go back"
        >
          <ArrowLeft size={24} />
        </button>
        <h1>Join a Jam</h1>
      </header>

      <main className="join-room-main">
        <div className="join-room-card">
          <div className="join-room-icon">
            <LogIn size={32} />
          </div>

          <p className="join-room-description">
            Enter the room ID and password to join a listening session
          </p>

          <form onSubmit={handleSubmit} className="join-room-form">
            <TextField
              label="Room ID"
              placeholder="Enter room ID"
              value={formData.roomCode}
              onChange={(e) => setFormData({ ...formData, roomCode: e.target.value })}
              error={errors.roomCode}
              leftIcon={<Hash size={18} />}
              fullWidth
            />

            <PasswordField
              label="Room Password"
              placeholder="4 digits"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              error={errors.password}
              maxLength={4}
              fullWidth
            />

            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              loading={loading}
            >
              Join Room
            </Button>
          </form>

          <div className="join-room-help">
            <p>Don't have a room ID?</p>
            <button onClick={() => navigate('/create')} className="join-room-create-link">
              Create a new room
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
