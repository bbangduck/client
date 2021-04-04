import instance from "./axios";

const fetcher = async (url: any) => {
  const response = await instance({
    method: "get",
    url: url,
    data: {},
  });

  return response.data;
};

export default fetcher;
