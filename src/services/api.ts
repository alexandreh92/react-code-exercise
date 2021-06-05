import axios from 'axios';

export const baseURL = process.env.REACT_APP_PRO_PUBLICA_URL;

const api = axios.create({
  baseURL,
});

api.interceptors.request.use(
  async config => {
    const configOverride = config;

    if (process.env.REACT_APP_PROPUBLICA_API_KEY) {
      configOverride.headers['X-API-Key'] =
        process.env.REACT_APP_PROPUBLICA_API_KEY;
    }

    return configOverride;
  },
  err => {
    return Promise.reject(err);
  },
);

export default api;
