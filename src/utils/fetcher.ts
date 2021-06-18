/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosAPI from './axios';

const fetcher = (url: string): Promise<any> =>
  axiosAPI({
    method: 'get',
    url,
  }).then((response) => response.data);

export default fetcher;
