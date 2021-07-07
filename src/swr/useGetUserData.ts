/* eslint-disable @typescript-eslint/no-explicit-any */
import useSWR from 'swr';
import usePopAlarm from '../hooks/usePopAlarm';
import fetcher from '../utils/fetcher';

interface UserDataType {
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
  ];
  myProfile: boolean;
  email: string;
  socialAccounts: [
    {
      socialId: string;
      socialType: string;
    },
  ];
  registerTimes: string;
  updateTimes: string;
}

export const useGetUserData = (): {
  data: UserDataType | undefined;
  error: any;
  loading: boolean;
  mutate: (data?: UserDataType, shouldRevalidate?: boolean | undefined) => Promise<UserDataType>;
  errorStatus?: number | undefined;
} => {
  const memberId = sessionStorage.getItem('bbangUserId');
  const [popAlarm] = usePopAlarm();
  const { data, error, mutate, isValidating } = useSWR(
    `${process.env.REACT_APP_URL}/api/members/${memberId}/profiles`,
    memberId ? fetcher : null,
  );
  if (error && error?.response?.status === 403) popAlarm('탈퇴한 회원은 재가입이 불가능합니다.');
  return {
    data,
    error,
    loading: isValidating,
    mutate,
    errorStatus: error?.response?.status,
  };
};

export default useGetUserData;
