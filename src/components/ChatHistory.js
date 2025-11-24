import React, { useState, useEffect } from 'react';
import { getHistory } from '../services/api';
import '../styles/Chat.css';

const ChatHistory = ({ currentUser }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        setLoading(true);
        const history = await getHistory(currentUser);
        setMessages(history);
        setError(null);
      } catch (err) {
        setError('Erro ao carregar histórico');
        console.error('Erro:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [currentUser]);

  if (loading) {
    return (
      <div className="chat-history">
        <div className="chat-header bg-primary text-white p-3">
          <h4 className="mb-0">
            Histórico - {currentUser === 'A' ? 'Usuário A' : 'Usuário B'}
          </h4>
        </div>
        <div className="text-center p-4">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Carregando...</span>
          </div>
          <p className="mt-2">Carregando histórico...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="chat-history">
        <div className="chat-header bg-primary text-white p-3">
          <h4 className="mb-0">
            Histórico - {currentUser === 'A' ? 'Usuário A' : 'Usuário B'}
          </h4>
        </div>
        <div className="alert alert-danger m-3" role="alert">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="chat-history">
      <div className="chat-header bg-primary text-white p-3">
        <h4 className="mb-0">
          Histórico - {currentUser === 'A' ? 'Usuário A' : 'Usuário B'}
        </h4>
      </div>
      
      <div className="messages-container">
        {messages.length === 0 ? (
          <div className="text-center p-4">
            <p className="text-muted">Nenhuma mensagem no histórico.</p>
          </div>
        ) : (
          messages.map((message, index) => (
            <div key={index} className="history-message">
              <div className="user-question">
                <strong>Você:</strong>
                <div className="message-bubble question-bubble">
                  {message.question}
                </div>
                <small className="text-muted">
                  {new Date(message.created_at).toLocaleString('pt-BR')}
                </small>
              </div>
              <div className="bot-response">
                <strong>Bot:</strong>
                <div className="message-bubble response-bubble">
                  {message.response}
                </div>
                <small className="text-muted">
                  {new Date(message.created_at).toLocaleString('pt-BR')}
                </small>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ChatHistory;