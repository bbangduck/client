import React, { ReactElement } from 'react';
import * as S from './style';

interface Props {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  toggleHandeler: () => void;
}
const ToggleBtn = ({ state, setState, toggleHandeler }: Props): ReactElement => {
  const onToggle = () => {
    setState((prev) => !prev);
    toggleHandeler();
  };

  return (
    <S.ToggleBtn onClick={onToggle}>
      <S.Circle isClicked={state} />
    </S.ToggleBtn>
  );
};

export default ToggleBtn;
