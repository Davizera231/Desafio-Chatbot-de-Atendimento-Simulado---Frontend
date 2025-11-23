import React, { useState, useEffect, useRef } from 'react';
import { useChatData } from '../hooks/useChatData';
import { MessageBubble } from '../components/MessageBubble';


const ChatScreen = ({ currentUserProfile }) => {
  const [newMessage, setNewMessage] = useState('');
  const { messages, isLoading, isSending, error, sendNewMessage } = useChatData(currentUserProfile);
  const messagesEndRef = useRef(null);

 
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      sendNewMessage(newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="flex flex-col h-full">
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3" role="alert">
          <p className="font-bold">Erro de Comunicação:</p>
          <p className="text-sm">{error}</p>
        </div>
      )}
      
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 border-b">
        {isLoading ? (
          <div className="text-center text-gray-500 py-10">Carregando histórico...</div>
        ) : messages.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            Nenhuma mensagem enviada ainda. Comece a conversa!
          </div>
        ) : (
          messages.map((msg) => (
            <MessageBubble 
              key={msg.id} 
              message={msg} 
              currentUserProfile={currentUserProfile}
            />
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      
      <form onSubmit={handleSend} className="p-4 bg-white border-t flex space-x-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder={`Digite sua mensagem como Usuário ${currentUserProfile}...`}
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
          disabled={isSending || isLoading}
        />
        <button
          type="submit"
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-150 disabled:opacity-50"
          disabled={isSending || !newMessage.trim() || isLoading}
        >
          {isSending ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
    </div>
  );
};

export default ChatScreen;