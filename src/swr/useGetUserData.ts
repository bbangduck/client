import useSWR from 'swr';
import fetcher from '../utils/fetcher';

interface UserDataType {
  status: number;
  data: {
    memberId: number;
    profileImage: {
      profileImageId: number;
      profileImageUrl: string;
      profileImageThumbnailUrl: string;
    };
    nickname: string;
    description: string;
    roomEscapeStatus: {
      challengesCount: number;
      successCount: number;
      failCount: number;
    };
    roomEscapeRecodesOpenStatus: string;
    playInclinations: [
      {
        genre: {
          genreCode: string;
          genreName: string;
        };
        playCount: number;
      },
      {
        genre: {
          genreCode: string;
          genreName: string;
        };
        playCount: number;
      },
    ];
    email: string;
    socialAccounts: [
      {
        socialId: string;
        socialType: string;
      },
    ];
    registerTimes: string;
    updateTimes: string;
  };
  message: string;
}

export const useGetUserData = (): {
  data: UserDataType | undefined;
  error: string;
  loading: boolean;
  mutate: (data?: UserDataType, shouldRevalidate?: boolean | undefined) => Promise<UserDataType>;
} => {
  const memberId = sessionStorage.getItem('bbangUserId');
  const { data, error, mutate, isValidating } = useSWR(
    `${process.env.REACT_APP_URL}/api/members/${memberId}/profiles`,
    memberId ? fetcher : null,
  );

  return {
    data,
    error,
    loading: isValidating,
    mutate,
  };
};

export default useGetUserData;
