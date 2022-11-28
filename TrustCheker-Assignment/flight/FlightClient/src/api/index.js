import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8080/' });


export const fetchFlight = (id) => API.get(`/flight/${id}`);
export const fetchFlights = () => API.get(`/flight`);
export const createFlight = (newFlight) => API.post('/flight', newFlight);