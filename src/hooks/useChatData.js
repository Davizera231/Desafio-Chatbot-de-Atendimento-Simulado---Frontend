import { useState, useEffect, useCallback } from 'react';
import { fetchHistory, sendMessage } from '../api/chatApi';

export function useChatData(currentUserProfile) {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState(null);

  
  const loadHistory = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchHistory(currentUserProfile);
      setMessages(data);
    } catch (err) {
      console.error("Erro ao carregar histórico:", err);
      setError("Não foi possível carregar o histórico. Verifique a conexão com o backend.");
    } finally {
      setIsLoading(false);
    }
  }, [currentUserProfile]); 

  
  useEffect(() => {
    loadHistory();
  }, [loadHistory]);

  
  const sendNewMessage = useCallback(async (text) => {
    if (isSending || !text.trim()) return;

    setIsSending(true);
    setError(null);

    try {
      
      await sendMessage(currentUserProfile, text);
      
      
      await loadHistory(); 
      
    } catch (err) {
      console.error("Erro ao enviar mensagem:", err);
      setError(err.message || "Erro de comunicação com o servidor.");
    } finally {
      setIsSending(false);
    }
  }, [currentUserProfile, isSending, loadHistory]);

  return { messages, isLoading, isSending, error, loadHistory, sendNewMessage };
}