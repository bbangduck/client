import React, { ReactElement, useRef } from 'react';
import * as S from './style';
import './style.css';

const ThemeDetailMap = (): ReactElement => {
  const mapRef = useRef<HTMLDivElement>(null);
  const { naver } = window;

  const naverMap = () => {
    const infoWindowTag = `<div class="naver-container">제로월드 강남점<div class="naver-anchor"/></div>`;
    if (mapRef.current) {
      const mapOptions = {
        center: new naver.maps.LatLng(37.49761, 127.028692),
        zoom: 15,
      };

      const map = new naver.maps.Map(mapRef.current, mapOptions);

      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(37.49761, 127.028692),
        map,
      });

      const infoWindow = new naver.maps.InfoWindow({
        content: infoWindowTag,
        borderColor: 'transparent',
        backgroundColor: 'transparent',
        disableAnchor: true,
      });

      infoWindow.open(map, marker);
    }
  };
  naverMap();

  return <S.MapContainer ref={mapRef} />;
};

export default ThemeDetailMap;
