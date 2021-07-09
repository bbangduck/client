import axios from 'axios';
import { useHistory } from 'react-router-dom';
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
    const history = useHistory();
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
          const accessTokens = res.data.accessToken;
          const accessToken = `${accessTokens.header}.${accessTokens.payload}.${accessTokens.signature}`;

          sessionStorage.setItem('bbangAT', accessToken);

          originalRequest.headers = { 'X-AUTH-TOKEN': accessToken };
          return axios(originalRequest);
        })
        .catch((errorAfterRefresh) => {
          const statusCode = Number(errorAfterRefresh.response.data.status);
          console.log(`1432테스트${statusCode === 1432}`);
          console.log(`1433테스트${statusCode === 1433}`);
          if (statusCode === 1432 || statusCode === 1433) {
            console.log(`if문 성공`);
            removeSessionStorage();
            history.push('/login');
          }
        });
    }
    return Promise.reject(error);
  },
);

export default axiosAPI;
