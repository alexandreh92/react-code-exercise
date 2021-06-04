import axios from 'axios';

export const baseURL = process.env.PRO_PUBLICA_URL;

const api = axios.create({
  baseURL,
});

export default api;
