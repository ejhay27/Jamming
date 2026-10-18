import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock, Music2 } from 'lucide-react';
import { Button, TextField, PasswordField } from '@jamming/ui';
import { createRoomSchema } from '@jamming/validation';
import './CreateRoomPage.css';

export const CreateRoomPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    description: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    try {
      createRoomSchema.parse(formData);
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
    
    // TODO: Call backend API to create room
    // For now, simulate API call
    setTimeout(() => {
      setLoading(false);
      // Navigate to room (placeholder)
      navigate('/');
    }, 1000);
  };

  return (
    <div className="create-room-page page">
      <header className="create-room-header">
        <button
          className="back-btn"
          onClick={() => navigate('/')}
          aria-label="Go back"
        >
          <ArrowLeft size={24} />
        </button>
        <h1>Create a Jam</h1>
      </header>

      <main className="create-room-main">
        <div className="create-room-card">
          <div className="create-room-icon">
            <Music2 size={32} />
          </div>

          <form onSubmit={handleSubmit} className="create-room-form">
            <TextField
              label="Room Name"
              placeholder="e.g., Friday Night Vibes"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              error={errors.name}
              fullWidth
            />

            <PasswordField
              label="Room Password"
              placeholder="4 digits"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              error={errors.password}
              hint="Share this password with friends to let them join"
              maxLength={4}
              fullWidth
            />

            <TextField
              label="Description (Optional)"
              placeholder="What's this jam about?"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              error={errors.description}
              fullWidth
            />

            <div className="create-room-info">
              <Lock size={16} />
              <span>Private room - only people with the password can join</span>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              loading={loading}
            >
              Create Room
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
};
