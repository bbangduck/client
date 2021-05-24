import axios from 'axios';

const baseURL = process.env.REACT_APP_URL;

export const axiosAPI = axios.create({
  baseURL,
});
const axiosWithToken = axios.create({
  baseURL,
});

axiosWithToken.interceptors.request.use(
  (config) => {
    const configResult = config;
    const accessToken = sessionStorage.getItem('bbangAT');

    if (accessToken) {
      const headers = { 'X-AUTH-TOKEN': accessToken };
      configResult.headers = headers;
    }

    return configResult;
  },
  (error) => Promise.reject(error),
);

axiosWithToken.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const {
      config,
      response: { status },
    } = error;

    const originalRequest = config;

    if (status === 401) {
      const refreshToken = sessionStorage.getItem('bbangRT');

      axios({
        method: 'post',
        url: '/api/auth/refresh',
        headers: { refreshToken },
      }).then((response) => {
        const accessTokens = response.data.accessToken;
        const accessToken = `${accessTokens.header}.${accessTokens.payload}.${accessTokens.signature}`;

        sessionStorage.setItem('bbangAT', accessToken);

        originalRequest.headers = { 'X-AUTH-TOKEN': accessToken };
        return axios(originalRequest);
      });
    }
  },
);

export default axiosWithToken;
