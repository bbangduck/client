import useSWR from "swr";

declare global {
  interface Window {
    counter: any;
  }
}

const useCounter = () => {
  const { data, mutate } = useSWR("counterState", () => window.counter);

  return {
    data: data || 0,
    mutate: (counter: number) => {
      window.counter = counter;
      mutate();
    },
  };
};

export default useCounter;
