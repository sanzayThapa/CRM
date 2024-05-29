// services/apiService.js

import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

export const getContacts = () => axios.get(`${API_URL}contacts/`);
export const addContact = (contact) => axios.post(`${API_URL}contacts/`, contact);
export const getInvoices = () => axios.get(`${API_URL}invoices/`);
export const addInvoice = (invoice) => axios.post(`${API_URL}invoices/`, invoice);
