/* eslint-disable @typescript-eslint/no-explicit-any */
import useSWR from 'swr';
import { useHistory } from 'react-router-dom';
import { ThemeAnalysisType } from '../components/organisms/ThemeSmallGraph';
import fetcherWithoutToken from '../utils/fetcherWithoutToken';

interface ReturnType {
  data: ThemeAnalysisType;
  error: any;
  loading: boolean;
}
const useGetThemeAnalysis = (themeId: string): ReturnType => {
  const history = useHistory();
  const { data, error } = useSWR(`/api/themes/${themeId}/analyses`, fetcherWithoutToken);
  const errorStatus = error?.response?.status;

  if (errorStatus === (404 || 400)) history.push('/theme');
  return {
    data,
    error,
    loading: !data && !error,
  };
};

export default useGetThemeAnalysis;
