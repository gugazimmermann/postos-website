import axios from 'axios';

const baseURL = `${process.env.NEXT_PUBLIC_API_URL}/register` || '';

const instance = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
});

export default instance;
