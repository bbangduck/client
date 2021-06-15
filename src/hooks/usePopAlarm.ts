import { useDispatch } from 'react-redux';
import { AppDispatch } from '../stores/rootReducer';
import { popAlarmReducer } from '../stores/popAlarmReducer';

const usePopAlarm = (): ((pop: boolean, content: string) => void)[] => {
  const dispatch = useDispatch<AppDispatch>();

  const showPopAlarm = (pop: boolean, content: string) => {
    dispatch(popAlarmReducer({ pop, content }));
    setTimeout(() => {
      dispatch(popAlarmReducer({ pop: false, content }));
    }, 2000);
  };

  return [showPopAlarm];
};

export default usePopAlarm;
