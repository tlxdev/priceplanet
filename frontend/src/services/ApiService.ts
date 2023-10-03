import axios from 'axios';

if (!process.env.NEXT_PUBLIC_API_URL) {
  throw new Error('NEXT_PUBLIC_API_URL not defined');
}

const Api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

Api.interceptors.request.use((config) => {
  return config;
});

Api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

export default Api;