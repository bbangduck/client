/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const baseURL = process.env.REACT_APP_URL;
axios.defaults.baseURL = baseURL;

const fetcherWithoutToken = (url: string): Promise<any> =>
  axios({
    method: 'get',
    url,
  }).then((response) => response.data);

export default fetcherWithoutToken;
