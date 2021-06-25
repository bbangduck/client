/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement, useRef, useState } from 'react';
import locationIcon from '../../../assets/images/location/location.svg';
import * as S from './style';
import './style.css';

declare global {
  interface Window {
    kakao: any;
  }
}

const ThemeDetailKakaoMap = (): ReactElement => {
  const { kakao } = window;
  const mapRef = useRef<HTMLDivElement>(null);
  const [myLatLng, setMyLatLng] = useState<null | { Lat: number; Lng: number }>(null);

  if (mapRef.current) {
    const options = {
      center: new kakao.maps.LatLng(37.49761, 127.028692),
      level: 3,
      draggable: true,
      scrollwheel: true,
    };

    const map = new kakao.maps.Map(mapRef.current, options);

    // 마커 생성
    const markerPosition = new kakao.maps.LatLng(37.49761, 127.028692);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);

    // 커스텀오버레이 생성
    const overlayContent = '<div class="kakao-container">제로월드 강남점<div class="kakao-anchor"/></div>';
    const overlayPosition = new kakao.maps.LatLng(37.49761, 127.028692);
    const overlay = new kakao.maps.CustomOverlay({
      position: overlayPosition,
      content: overlayContent,
    });
    overlay.setMap(map);

    if (myLatLng) {
      const myMarkerPosition = new kakao.maps.LatLng(myLatLng.Lat, myLatLng.Lng);
      const myMarker = new kakao.maps.Marker({
        map,
        position: myMarkerPosition,
      });

      map.panTo(myMarkerPosition);
    }
  }

  const onMyLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latlng = { Lat: position.coords.latitude, Lng: position.coords.longitude };
        setMyLatLng(latlng);
      });
    }
  };

  return (
    <S.KakaoMap ref={mapRef}>
      <S.LocationBox onClick={onMyLocationClick}>
        <img src={locationIcon} alt="내위치" />
      </S.LocationBox>
    </S.KakaoMap>
  );
};

export default ThemeDetailKakaoMap;
