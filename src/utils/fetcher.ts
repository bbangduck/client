import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_URL || 'http://localhost:8080';

const fetcher = (url: string): Promise<string> =>
  axios.get(url, { withCredentials: true }).then((response) => response.data);

export default fetcher;
