import React, { ReactElement } from 'react';
import MapHeader from '../../molecules/MapHeader';
import Nav from '../../molecules/Nav';
import KakaoMap from '../../organisms/KakaoMap';

const MapTemplate = (): ReactElement => {
  return (
    <section>
      <MapHeader />
      <KakaoMap />
      <Nav />
    </section>
  );
};

export default MapTemplate;
