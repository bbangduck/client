import axios from 'axios';

const baseURL = process.env.REACT_APP_URL;

const axiosAPI = axios.create({
  baseURL,
});

axiosAPI.interceptors.request.use(
  (config) => {
    const configResult = config;
    const accessToken = localStorage.getItem('bbangAT');

    if (localStorage.getItem('bbangAT')) {
      const headers = { 'X-AUTH-TOKEN': accessToken };
      configResult.headers = headers;
    }

    return configResult;
  },
  (error) => Promise.reject(error),
);

axiosAPI.interceptors.response.use(
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
      const refreshToken = localStorage.getItem('bbangRT');

      axios({
        method: 'post',
        url: '/api/auth/refresh',
        headers: { refreshToken },
      }).then((response) => {
        const accessTokens = response.data.accessToken;
        const accessToken = accessTokens.header.concat(accessTokens.payload, accessTokens.signature);

        localStorage.removeItem('bbangAT');
        localStorage.setItem('bbangAT', accessToken);
        originalRequest.headers = { 'X-AUTH-TOKEN': accessToken };
        return axios(originalRequest);
      });
    }
  },
);

export default axiosAPI;