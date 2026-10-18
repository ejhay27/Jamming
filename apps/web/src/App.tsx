import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/Home/HomePage';
import { CreateRoomPage } from './pages/CreateRoom/CreateRoomPage';
import { JoinRoomPage } from './pages/JoinRoom/JoinRoomPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreateRoomPage />} />
      <Route path="/join" element={<JoinRoomPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
