import React, { ReactElement } from 'react';
import * as S from './style';

interface Props {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}
const ToggleBtn = ({ state, setState }: Props): ReactElement => {
  return (
    <S.ToggleBtn onClick={() => setState((prev) => !prev)}>
      <S.Circle isClicked={state} />
    </S.ToggleBtn>
  );
};

export default ToggleBtn;
