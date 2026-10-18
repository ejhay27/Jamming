import { useNavigate } from 'react-router-dom';
import { Music2, Users, Plus, LogIn, Settings, Sparkles } from 'lucide-react';
import { ConnectionIndicator } from '@jamming/ui';
import './HomePage.css';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page page">
      {/* Header */}
      <header className="home-header">
        <div className="home-logo">
          <div className="home-logo-icon">
            <Music2 size={24} />
          </div>
          <span className="home-logo-text">Jamming</span>
        </div>
        <div className="home-header-actions">
          <ConnectionIndicator connected={false} label="Spotify" />
          <button className="home-settings-btn" aria-label="Settings">
            <Settings size={20} />
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="home-main">
        <div className="home-hero">
          <div className="home-hero-badge">
            <Sparkles size={14} />
            <span>Private Listening Rooms</span>
          </div>
          <h1 className="home-title">Listen Together</h1>
          <p className="home-subtitle">
            Create private rooms, invite friends, and discover music together with a shared queue
          </p>
        </div>

        <div className="home-actions">
          {/* Create Room Card */}
          <button
            className="home-action-card home-action-primary"
            onClick={() => navigate('/create')}
          >
            <div className="home-action-icon home-action-icon-primary">
              <Plus size={28} />
            </div>
            <div className="home-action-content">
              <h2 className="home-action-title">Create a Jam</h2>
              <p className="home-action-description">
                Start a new private listening room and invite your friends
              </p>
            </div>
            <div className="home-action-arrow">→</div>
          </button>

          {/* Join Room Card */}
          <button
            className="home-action-card home-action-secondary"
            onClick={() => navigate('/join')}
          >
            <div className="home-action-icon home-action-icon-secondary">
              <LogIn size={28} />
            </div>
            <div className="home-action-content">
              <h2 className="home-action-title">Join a Jam</h2>
              <p className="home-action-description">
                Enter a room ID and password to join an existing listening room
              </p>
            </div>
            <div className="home-action-arrow">→</div>
          </button>
        </div>

        {/* Recent Rooms */}
        <section className="home-section">
          <div className="home-section-header">
            <Users size={18} />
            <h3>Recent Rooms</h3>
          </div>
          <div className="home-empty-state">
            <Music2 size={32} />
            <p>No recent rooms yet</p>
            <span className="home-empty-hint">Create or join your first jam to get started</span>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="home-footer">
        <p>Jamming v0.1.0 · Social Listening</p>
      </footer>
    </div>
  );
};
