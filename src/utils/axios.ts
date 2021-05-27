import axios from 'axios';

const baseURL = process.env.REACT_APP_URL;

const axiosAPI = axios.create({
  baseURL,
  headers: {
    'X-AUTH-TOKEN': sessionStorage.getItem('bbangAT'),
  },
});

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
      const refreshToken = sessionStorage.getItem('bbangRT');
      axios({
        method: 'post',
        url: `${baseURL}/api/auth/refresh`,
        data: { refreshToken },
      }).then((response) => {
        const accessTokens = response.data.data.accessToken;
        const accessToken = `${accessTokens.header}.${accessTokens.payload}.${accessTokens.signature}`;

        sessionStorage.setItem('bbangAT', accessToken);

        originalRequest.headers = { 'X-AUTH-TOKEN': accessToken };
        return axios(originalRequest);
      });
    }
    return Promise.reject(error);
  },
);

export default axiosAPI;
