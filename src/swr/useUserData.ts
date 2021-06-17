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
  data: UserDataType;
  error: string;
  loading: boolean;
} => {
  const memberId = sessionStorage.getItem('bbangUserId');
  const { data, error } = useSWR(`/api/members/${memberId}/profiles`, fetcher);

  const loading = !data && !error;

  return {
    data,
    error,
    loading,
  };
};

export default useGetUserData;
