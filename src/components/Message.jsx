import React from 'react';


export const MessageBubble = ({ message, currentUserProfile }) => {
  const isUserMessage = message.sender === currentUserProfile;
  const isBackend = message.sender === 'Backend';
  
  let bubbleClasses = '';
  let senderName = '';

  if (isBackend) {
    bubbleClasses = 'bg-blue-100 text-blue-800 self-start';
    senderName = 'Atendente Simulado';
  } else if (isUserMessage) {
    bubbleClasses = 'bg-indigo-600 text-white self-end';
    senderName = `Usuário ${currentUserProfile}`;
  } else {
      
      return null; 
  }

  
  const formatTime = (date) => date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

  return (
    <div className={`flex w-full ${isUserMessage ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-xs sm:max-w-md p-3 rounded-lg shadow-md ${bubbleClasses}`}>
        <div className="text-xs font-semibold opacity-75 mb-1">
          {senderName}
          <span className="ml-2">({formatTime(message.timestamp)})</span>
        </div>
        <p className="whitespace-pre-wrap">{message.text}</p>
      </div>
    </div>
  );
};