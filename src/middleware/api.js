import axios from 'axios';

const API_ROOT = 'http://localhost:5500/api';

const api = {
  get: endpoint => axios.get(`${API_ROOT}/${endpoint}`),
  post: (endpoint, data) => axios.post(`${API_ROOT}/${endpoint}`, data),
  put: (endpoint, data) => axios.put(`${API_ROOT}/${endpoint}`, data),
  delete: endpoint => axios.delete(`${API_ROOT}/${endpoint}`)
};

export default api;
