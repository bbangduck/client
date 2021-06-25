import React, { ReactElement, useRef, useState, useEffect } from 'react';
import locationIcon from '../../../assets/images/location/location.svg';
import * as S from './style';
import './style.css';

const ThemeDetailNaverMap = (): ReactElement => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [useGeoLocation, setUseGeoLocation] = useState(false);
  const [mapLocation, setMapLocation] = useState({ Lat: 37.49761, Lng: 127.028692 });
  const [myLocation, setMyLocation] = useState({ Lat: 0, Lng: 0 });
  const { naver } = window;

  const naverMap = () => {
    const infoWindowTag = `<div class="naver-container">제로월드 강남점<div class="naver-anchor"/></div>`;
    const mapOptions = {
      center: new naver.maps.LatLng(mapLocation.Lat, mapLocation.Lng),
      zoom: 15,
      zoomControl: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.TOP_LEFT,
      },
    };

    if (mapRef.current) {
      const map = new naver.maps.Map(mapRef.current, mapOptions);

      if (useGeoLocation) {
        const newMap = new naver.maps.LatLng(myLocation.Lat, myLocation.Lng);
        map.setCenter(newMap);
        const myMarker = new naver.maps.Marker({
          position: new naver.maps.LatLng(myLocation.Lat, myLocation.Lng),
          map,
        });
      }

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

  const onLocationClick = () => {
    setUseGeoLocation(true);
  };

  useEffect(() => {
    if (useGeoLocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const myLatlng = { Lat: position.coords.latitude, Lng: position.coords.longitude };
        setMyLocation(myLatlng);
        setMapLocation(myLatlng);
      });
    }
  }, [useGeoLocation]);

  naverMap();

  return (
    <S.MapContainer ref={mapRef}>
      <S.LocationBox onClick={onLocationClick}>
        <img src={locationIcon} alt="내 위치" />
      </S.LocationBox>
    </S.MapContainer>
  );
};

export default ThemeDetailNaverMap;
