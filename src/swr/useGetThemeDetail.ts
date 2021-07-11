/* eslint-disable @typescript-eslint/no-explicit-any */
import useSWR from 'swr';
import fetcherWithoutToken from '../utils/fetcherWithoutToken';

type DataType = {
  themeId: number;
  themeImage: {
    themeImageId: number;
    themeImageUrl: string | null;
    themeImageThumbnailUrl: string | null;
  };
  themeName: string;
  themeDescription: string;
  themeGenres: [
    {
      genreId: number;
      genreCode: string;
      genreName: string;
    },
    {
      genreId: number;
      genreCode: string;
      genreName: string;
    },
  ];
  shopInfo: {
    franchiseInfo: {
      franchiseId: number;
      franchiseName: string;
    };
    shopId: number;
    shopName: string;
    areaInfo: {
      areaId: number;
      areaCode: string;
      areaName: string;
    };
  };
  playTime: string;
  numberOfPeoples: string[];
  difficulty: string;
  activity: string;
  horrorGrade: string;
};
const useGetThemeDetail = (themeId?: string): { data: DataType; error: any; loading: boolean } => {
  const { data, error } = useSWR(`/api/themes/${themeId}`, themeId ? fetcherWithoutToken : null);

  return {
    data,
    error,
    loading: !data && !error,
  };
};

export default useGetThemeDetail;
