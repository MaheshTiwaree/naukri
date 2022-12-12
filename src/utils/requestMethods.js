import axios from 'axios';

const BASE_URL = 'https://jobs-api.squareboat.info/api/v1';

const TOKEN = localStorage.getItem('token');
console.log(TOKEN);

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `${TOKEN}` },
});
