import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api/chat';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const sendMessage = async (user, message) => {
  const response = await api.post('/send/', {
    user,
    message
  });
  return response.data;
};

export const getHistory = async (userId) => {
  const response = await api.get(`/history/${userId}/`);
  return response.data;
};

export default api;