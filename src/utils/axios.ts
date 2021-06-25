import axios from 'axios';
import removeSessionStorage from './removeSessionStorage';

const baseURL = process.env.REACT_APP_URL;

const axiosAPI = axios.create({
  baseURL,
  headers: {
    'X-AUTH-TOKEN': sessionStorage.getItem('bbangAT'),
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
  (error) => {
    const { config, response } = error;

    const originalRequest = config;

    if (response.status === 401) {
      const refreshToken = sessionStorage.getItem('bbangRT');
      axios({
        method: 'post',
        url: `${baseURL}/api/auth/refresh`,
        data: { refreshToken },
      })
        .then((res) => {
          const accessTokens = res.data.data.accessToken;
          const accessToken = `${accessTokens.header}.${accessTokens.payload}.${accessTokens.signature}`;

          sessionStorage.setItem('bbangAT', accessToken);

          originalRequest.headers = { 'X-AUTH-TOKEN': accessToken };
          return axios(originalRequest);
        })
        .catch((errorAfterRefresh) => {
          if (errorAfterRefresh?.data.status === 1432 || errorAfterRefresh?.data.status === 1433)
            removeSessionStorage();
        });
    }
    return Promise.reject(error);
  },
);

export default axiosAPI;
