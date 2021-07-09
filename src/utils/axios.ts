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
    const { config, response } = error;

    const originalRequest = config;

    if (response.status === 401) {
      const refreshToken = sessionStorage.getItem('bbangRT');
      console.log('토큰으로인한 401에러가 발생함');
      axios({
        method: 'post',
        url: `${baseURL}/api/auth/refresh`,
        data: { refreshToken },
      })
        .then((res) => {
          console.log(`리프레시토큰 요청 성공${res.data}`);
          const accessTokens = res.data.accessToken;
          const accessToken = `${accessTokens.header}.${accessTokens.payload}.${accessTokens.signature}`;

          sessionStorage.setItem('bbangAT', accessToken);

          originalRequest.headers = { 'X-AUTH-TOKEN': accessToken };
          return axios(originalRequest);
        })
        .catch((errorAfterRefresh) => {
          console.log(`리프레시토큰 에러발생 ${errorAfterRefresh.response}`);
          const history = useHistory();
          const statusCode = errorAfterRefresh.response.status;
          if (statusCode === 1432 || statusCode === 1433) {
            removeSessionStorage();
            history.push('/login');
          }
        });
    }
    return Promise.reject(error);
  },
);

export default axiosAPI;
