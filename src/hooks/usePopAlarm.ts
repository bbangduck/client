import { useDispatch } from 'react-redux';
import { AppDispatch } from '../stores/rootReducer';
import { popAlarmReducer } from '../stores/popAlarmReducer';

const usePopAlarm = (): ((content: string) => void)[] => {
  const dispatch = useDispatch<AppDispatch>();

  const showPopAlarm = (content: string) => {
    dispatch(popAlarmReducer({ pop: true, content }));
    setTimeout(() => {
      dispatch(popAlarmReducer({ pop: false, content }));
    }, 2000);
  };

  return [showPopAlarm];
};

export default usePopAlarm;
