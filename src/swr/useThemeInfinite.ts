/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSWRInfinite } from 'swr';
import fetcherWithoutToken from '../utils/fetcherWithoutToken';

export type pageDataContentsType = {
  franchiseName: string;
  shopName: string;
  themeId: number;
  themeImage: {
    themeImageId: number;
    themeImageUrl: string;
    themeImageThumbnailUrl: string;
  } | null;
  themeName: string;
};

export type PreviousPageDataType = {
  contents: pageDataContentsType[];
  nowPageNum: number;
  requestAmount: number;
  totalResultsCount: number;
}[];

type ReturnType = {
  data: pageDataContentsType[] | undefined;
  size: number;
  setSize: (size: number | ((sizes: number) => number)) => Promise<any[] | undefined>;
  isLoading: boolean;
};

export const useThemeInfinite = (): ReturnType => {
  const { data, error, size, setSize } = useSWRInfinite(
    (index) => `/api/themes?pageNum=${index + 1}`,
    fetcherWithoutToken,
  );

  const result = data
    ?.map((content) => {
      return content?.contents?.map((item: PreviousPageDataType) => item);
    })
    .flat()
    .filter((item) => item);

  return {
    data: result,
    size,
    setSize,
    isLoading: !result && !error,
  };
};
