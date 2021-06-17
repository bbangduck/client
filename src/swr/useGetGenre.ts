import useSWR from 'swr';
import fetcher from '../utils/fetcher';

interface GenreType {
  status: number;
  data: {
    playInclinations: [
      {
        genre: {
          genreCode: string;
          genreName: string;
        };
        playCount: number;
      },
    ];
    totalThemeEvaluatesCount: number;
  };
  message: string;
}

const useGetGenre = (): { data: GenreType; error: string; loading: boolean } => {
  const memberId = sessionStorage.getItem('bbangUserId');
  const { data, error } = useSWR(`/api/members/${memberId}/play-inclinations`, fetcher);

  return {
    data,
    error,
    loading: !data && !error,
  };
};

export default useGetGenre;
