import useSWR from 'swr';

declare global {
  interface Window {
    counter: number;
  }
}

const useCounter = (): {
  data: number;
  mutate: (counter: number) => void;
} => {
  const { data, mutate } = useSWR('counterState', () => window.counter);

  return {
    data: data || 0,
    mutate: (counter: number): void => {
      window.counter = counter;
      mutate();
    },
  };
};

export default useCounter;
