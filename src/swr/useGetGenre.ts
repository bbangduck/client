import useSWR from 'swr';
import fetcher from '../utils/fetcher';

type GenreType = [
  {
    genre: {
      genreCode: string;
      genreName: string;
    };
    playCount: number;
  },
];

const useGetGenre = (): { data: GenreType; error: string; loading: boolean } => {
  const memberId = sessionStorage.getItem('bbangUserId');
  const { data, error } = useSWR(`/api/members/${memberId}/play-inclinations`, memberId ? fetcher : null);
  return {
    data: data?.playInclinations,
    error,
    loading: !data && !error,
  };
};

export default useGetGenre;
