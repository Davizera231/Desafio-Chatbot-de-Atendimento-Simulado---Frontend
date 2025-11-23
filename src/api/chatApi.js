const API_BASE_URL = 'http://localhost:8000/api';


export async function fetchHistory(profile) {
  const response = await fetch(`${API_BASE_URL}/history/${profile}/`);

  if (!response.ok) {
    throw new Error(`Erro ao carregar histórico: ${response.statusText}`);
  }

  const data = await response.json();
  
  
  return data.map(msg => ({
    ...msg,
    timestamp: new Date(msg.timestamp),
  }));
}


export async function sendMessage(userProfile, text) {
  const response = await fetch(`${API_BASE_URL}/chat/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_profile: userProfile,
      text: text,
    }),
  });

  if (!response.ok) {
    
    const errorBody = await response.json();
    throw new Error(`Erro ao enviar mensagem: ${errorBody.error || response.statusText}`);
  }

  
  return response.json();
}