import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserSelector from './components/UserSelector';
import Chat from './components/Chat';
import ChatHistory from './components/ChatHistory';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

function App() {
  const [currentUser, setCurrentUser] = useState('A');
  const [resetChatFlag, setResetChatFlag] = useState(0);

  const handleSetCurrentUser = (user) => {
    setCurrentUser(user);
    setResetChatFlag((p) => p + 1);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 bg-light sidebar">
            <UserSelector 
              currentUser={currentUser} 
              setCurrentUser={handleSetCurrentUser} 
            />
          </div>
            <div className="col-md-9 main-content">
            <Routes>
              <Route path="/" element={<Chat currentUser={currentUser} resetChatFlag={resetChatFlag} />} />
              <Route path="/historico" element={<ChatHistory currentUser={currentUser} />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;