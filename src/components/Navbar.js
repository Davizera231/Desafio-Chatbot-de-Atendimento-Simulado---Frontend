import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Chatbot Simulado
        </Link>
        <div className="navbar-nav">
          <Link 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} 
            to="/"
          >
            Chat
          </Link>
          <Link 
            className={`nav-link ${location.pathname === '/historico' ? 'active' : ''}`} 
            to="/historico"
          >
            Histórico
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;