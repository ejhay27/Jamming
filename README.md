# Jamming

Social listening and private music rooms application for Windows and Android.

## Overview

Jamming allows friends to create private online listening rooms, join using a room ID and four-digit password, discover Spotify tracks, collaborate on a shared queue, and coordinate their listening experience.

## Features

- **Private Rooms**: Create and join password-protected listening rooms
- **Shared Queue**: Collaborative music queue with real-time synchronization
- **Spotify Integration**: Search and add Spotify tracks to the queue
- **Cross-Platform**: Available on Windows desktop and Android phones
- **Real-time Sync**: Socket.IO-powered live updates across all clients

## Technology Stack

### Frontend
- React 18
- TypeScript (strict mode)
- Vite
- React Router
- Lucide Icons

### Backend
- Node.js
- Express
- TypeScript
- Socket.IO
- PostgreSQL

### Platforms
- **Windows**: Electron
- **Android**: Capacitor

## Project Structure

```
jamming/
├── apps/
│   ├── web/          # React web application
│   ├── windows/      # Electron wrapper
│   └── android/      # Capacitor wrapper
├── packages/
│   ├── ui/           # Design system and components
│   ├── shared/       # Shared types and utilities
│   └── validation/   # Zod validation schemas
├── server/           # Backend API and Socket.IO
├── database/         # Database migrations
└── docs/             # Documentation
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+
- PostgreSQL 14+

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd jamming
```

2. Install dependencies:
```bash
npm install
```

3. Copy environment variables:
```bash
cp .env.example .env
```

4. Configure your `.env` file with your database and Spotify credentials.

5. Start the development server:
```bash
# Start the web frontend
npm run dev:web

# Start the backend (in another terminal)
npm run dev:server
```

6. Open http://localhost:3000 in your browser.

## Development

### Available Scripts

- `npm run dev:web` - Start web frontend dev server
- `npm run dev:server` - Start backend dev server
- `npm run build:web` - Build web frontend for production
- `npm run build:server` - Build backend for production
- `npm run test` - Run all tests
- `npm run lint` - Lint all packages
- `npm run typecheck` - Type check all packages

### Database Setup

1. Create a PostgreSQL database:
```bash
createdb jamming
```

2. Run migrations:
```bash
npm run db:migrate --workspace=@jamming/server
```

### Spotify Integration

1. Create a Spotify Developer account at https://developer.spotify.com
2. Create a new application
3. Add redirect URIs for your environment
4. Copy the Client ID and Client Secret to your `.env` file

## Building for Production

### Web Application
```bash
npm run build:web
```

### Windows Installer (Electron)
```bash
npm run build:windows --workspace=@jamming/windows
```

### Android APK (Capacitor)
```bash
npm run build:android --workspace=@jamming/android
```

## Security

- Room passwords are hashed using bcrypt
- JWT tokens for authentication
- Rate limiting on sensitive endpoints
- CORS configured for production
- Environment variables for all secrets
- No credentials in source code

## Testing

Run the test suite:
```bash
npm test
```

## Documentation

See the `docs/` directory for:
- Architecture documentation
- API reference
- Database schema
- Deployment guide
- Security notes

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is proprietary software.

## Support

For issues and questions, please open an issue on GitHub.

---

Built with ❤️ for music lovers
