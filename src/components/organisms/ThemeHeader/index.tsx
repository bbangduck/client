import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import UpdateHeader from '../../molecules/UpdateHeader';
import more from '../../../assets/images/more/more2.svg';
import left from '../../../assets/images/arrow/whiteLeft.svg';
import * as S from './style';
import StarBox from '../../atoms/StarBox';
import StatusBlock from '../../atoms/StatusBlock';
import map from '../../../assets/images/map/map.svg';
import InfoBox from '../../atoms/InfoBox';
import testImg2 from '../../../assets/images/test/scary.jpg';
import { useClickOutside } from '../../../hooks/useClickOutside';
import BottomModal from '../../molecules/BottomModal';

const ThemeHeader = (): ReactElement => {
  const history = useHistory();
  const [visibleShareRef, shareModalOn, setShareModalOn, clickShareOutside] = useClickOutside(false);

  const onShare = () => {
    setShareModalOn(true);
  };

  const onUrlCopy = () => {
    const inputForUrlCopy = document.createElement('input');
    const urlText = window.location.href;

    document.body.appendChild(inputForUrlCopy);
    inputForUrlCopy.value = urlText;
    inputForUrlCopy.select();
    document.execCommand('copy');
    document.body.removeChild(inputForUrlCopy);
  };

  return (
    <>
      <S.Img src={testImg2} alt="" />
      <S.HeaderBox>
        <UpdateHeader img={more} arrow={left} imgAlt="공유하기" onImgClick={onShare} />
      </S.HeaderBox>
      <S.Container>
        <S.TotalBox>
          <S.LeftBox>
            <StarBox star={4.5} shadow />
            <StatusBlock content="EVENT" color="#2b2b2b" border={false} padding={12} bgColor="white" shadow />
          </S.LeftBox>
          <S.MapBox onClick={() => history.push('/theme/:name/location')} data-blink="blink">
            <img src={map} alt="위치" data-blink="blink" />
          </S.MapBox>
        </S.TotalBox>
        <S.H1Tag>[강남] 제로호텔L</S.H1Tag>
        <S.Location>제로월드 강남점</S.Location>
        <S.DetailBox>
          <InfoBox content="스릴러" bgColor="#f4f4f9" color="#151950" marginRight={4} borderRadius={4} />
          <InfoBox content="스릴러" bgColor="#f4f4f9" color="#151950" marginRight={4} borderRadius={4} />
        </S.DetailBox>
      </S.Container>
      {/* 공유하기 모달 */}
      <BottomModal
        title="공유하기"
        lastBtn="URL 복사"
        onLastClick={onUrlCopy}
        visibleContentRef={visibleShareRef}
        clickOutside={clickShareOutside}
        isOn={shareModalOn}
      />
    </>
  );
};

export default ThemeHeader;
