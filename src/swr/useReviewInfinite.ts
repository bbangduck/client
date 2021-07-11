/* eslint-disable react-hooks/exhaustive-deps */
import { useSWRInfinite } from 'swr';
import { useCallback, useEffect, useState } from 'react';
import fetcher from '../utils/fetcher';
import fetcherWithoutToken from '../utils/fetcherWithoutToken';

export type ReviewContentType = {
  reviewId: number;
  writerInfo: {
    memberId: number;
    nickname: string;
    profileImageUrl: string | null;
    profileImageThumbnailUrl: string | null;
  };
  themeInfo: {
    themeId: number;
    themeName: string;
    themeImageUrl: string | null;
    themeImageThumbnailUrl: string | null;
  };
  reviewType: string;
  reviewRecodeNumber: number;
  themeClearYN: boolean;
  themeClearTime: string;
  hintUsageCount: string;
  rating: number;
  playTogetherFriends: [
    {
      memberId: number;
      nickname: string;
      profileImageUrl: null | string;
      profileImageThumbnailUrl: null | string;
    },
  ];
  likeCount: number;
  myReview: boolean;
  like: boolean;
  possibleRegisterForSurveyYN: boolean;
  surveyYN: boolean;
  registerTimes: string;
  updateTimes: string;
  perceivedThemeGenres: [
    {
      genreId: number;
      genreCode: string;
      genreName: string;
    },
  ];
  comment?: string;
  perceivedDifficulty: string;
  perceivedHorrorGrade: string;
  perceivedActivity: string;
  scenarioSatisfaction: string;
  interiorSatisfaction: string;
  problemConfigurationSatisfaction: string;
}[];
type DataType = {
  contents: ReviewContentType;
  nowPageNum: number;
  requestAmount: number;
  totalResultsCount: number;
};

export type PreviousPageDataType = {
  contents: DataType[];
  nowPageNum: number;
  requestAmount: number;
  totalResultsCount: number;
}[];

type ReturnType = {
  data: ReviewContentType | undefined;
  loading: boolean;
};

export const useReviewInfinite = (themeId: string, condition: string): ReturnType => {
  const token = sessionStorage.getItem('bbangAT');

  const { data, error, setSize } = useSWRInfinite(
    (index) => `/api/themes/${themeId}/reviews?pageNum=${index + 1}&amount=20&osrtCondition=${condition}`,
    token ? fetcher : fetcherWithoutToken,
  );
  const [isLastReview, setIsLastReview] = useState(data?.[data.length - 1].contents.length < 20);

  useEffect(() => {
    if (data?.[data.length - 1].contents.length < 20) {
      setIsLastReview(true);
    } else {
      setIsLastReview(false);
    }
  }, [data]);

  const infiniteScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      if (!isLastReview) {
        setSize((prev) => prev + 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', infiniteScroll);

    return () => window.removeEventListener('scroll', infiniteScroll);
  }, [isLastReview]);

  const filteredData = data
    ?.map((content) => {
      return content?.contents?.map((item: PreviousPageDataType) => item);
    })
    .flat()
    .filter((item) => item);

  return { data: filteredData, loading: !error && !data };
};

export default useReviewInfinite;
