/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useEffect } from 'react';
import { useSWRInfinite } from 'swr';
import { themeQueryStateType } from '../stores/themeQueryReducer';
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
  lastRef: React.MutableRefObject<HTMLLIElement | null>;
  revalidate: () => Promise<boolean>;
};

export const useThemeInfinite = (themeQuery: themeQueryStateType): ReturnType => {
  const lastRef = useRef<null | HTMLLIElement>(null);
  const { themeType, rating, numberOfPeople, difficulty, activity, sortCondition } = themeQuery;
  const queryParameter = `&themeType=${themeType}&rating=${rating}&numberOfPeople=${numberOfPeople}&difficulty=${difficulty}&activity=${activity}&sortCondition=${sortCondition}`;

  const { data, error, size, setSize, revalidate } = useSWRInfinite(
    (index) => `/api/themes?amount=20&&pageNum=${index + 1}${queryParameter}`,
    fetcherWithoutToken,
  );

  const isLastTheme = data?.[data.length - 1].contents.length < 20;

  const doAtBottom = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      if (!isLastTheme) {
        setSize((prev) => prev + 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', doAtBottom);
    return () => window.removeEventListener('scroll', doAtBottom);
  }, [data]);

  const filteredData = data
    ?.map((content) => {
      return content?.contents?.map((item: PreviousPageDataType) => item);
    })
    .flat()
    .filter((item) => item);

  return {
    data: filteredData,
    size,
    setSize,
    isLoading: !filteredData && !error,
    lastRef,
    revalidate,
  };
};
