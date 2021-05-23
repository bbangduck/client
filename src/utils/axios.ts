import axios from 'axios';

const baseURL = process.env.REACT_APP_URL;

export const axiosAPI = axios.create({
  baseURL,
});

axiosAPI.interceptors.request.use((config) => {
  const configResult = config;

  if (localStorage.getItem('bbangAT')) {
    const headers = { 'X-AUTH-TOKEN': localStorage.getItem('bbangAT') };

    configResult.headers = headers;
  }

  return configResult;
});
