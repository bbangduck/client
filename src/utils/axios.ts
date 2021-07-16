import axios from 'axios';
import removeSessionStorage from './removeSessionStorage';

const baseURL = process.env.REACT_APP_URL;
const accessToken = sessionStorage.getItem('bbangAT');
const axiosAPI = axios.create({
  baseURL,
  headers: {
    'X-AUTH-TOKEN': accessToken,
  },
});

axiosAPI.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('bbangAT');
  config.headers = { 'X-AUTH-TOKEN': token };
  return config;
});

axiosAPI.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { config, response } = error;

    const originalRequest = config;
    if (response.status === 401) {
      const refreshToken = sessionStorage.getItem('bbangRT');
      try {
        const responseAfterRefresh = await axios({
          method: 'post',
          url: `${baseURL}/api/auth/refresh`,
          data: { refreshToken },
        });
        const accessTokens = await responseAfterRefresh.data.accessToken;
        const newAccessToken = `${accessTokens.header}.${accessTokens.payload}.${accessTokens.signature}`;
        sessionStorage.setItem('bbangAT', newAccessToken);
        originalRequest.headers = { 'X-AUTH-TOKEN': newAccessToken };
        return axios(originalRequest);
      } catch (errorAfterRefresh) {
        const statusCode = errorAfterRefresh?.response?.data?.status;
        if (statusCode === 1432 || statusCode === 1433) {
          removeSessionStorage();
          window.location.reload();
        }
      }
    }
    return Promise.reject(error);
  },
);

export default axiosAPI;
