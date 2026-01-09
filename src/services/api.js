import axios from 'axios';

const API_BASE_URL = 'http://localhost:8081/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getProjects = () => api.get('/public/projects');
export const getClients = () => api.get('/public/clients');
export const submitContact = (data) => api.post('/public/contact', data);
export const subscribeNewsletter = (email) => api.post('/public/subscribe', { email });

// Admin APIs
export const addProject = (formData) => api.post('/admin/projects', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
});
export const addClient = (formData) => api.post('/admin/clients', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
});
export const getContacts = () => api.get('/admin/contacts');
export const getSubscribers = () => api.get('/admin/subscribers');

export default api;
