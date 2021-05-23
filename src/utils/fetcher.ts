import { axiosAPI } from './axios';

const fetcher = (url: string): Promise<string> =>
  axiosAPI.get(url, { withCredentials: true }).then((response) => response.data);

export default fetcher;
