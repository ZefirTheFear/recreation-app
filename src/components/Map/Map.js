import React, { useState, useRef, useCallback } from "react";
import { GoogleMap, LoadScript, Marker, StreetViewPanorama } from "@react-google-maps/api";
import { TiArrowBack } from "react-icons/ti";

import mapStyles from "../../data/mapStyles.js";
import markerIcon from "../../data/skateboarding.svg";

import "./Map.scss";

const Map = () => {
  // console.log(JSON.stringify(mapStyles));

  const [isPanorama, setIsPanorama] = useState(false);

  const mapOptions = useRef({
    mapTypeId: "terrain",
    zoom: 15,
    center: {
      lat: 49.7380304,
      lng: 31.5169775
    },
    styles: mapStyles,
    fullscreenControl: false,
    mapTypeControl: false,
    disableDefaultUI: true
  });

  const mapContainerStyle = useRef({
    // height: "calc(100vh - 60px)",
    height: "100vh",
    width: "100vw"
  });

  const panoramaOptions = useRef({
    visible: true,
    position: {
      lat: 49.7365683,
      lng: 31.5168711
    },
    pov: {
      heading: 112,
      pitch: -15
    },
    zoom: 0,
    addressControl: false,
    addressControlOptions: {
      position: "TOP_CENTER"
    },
    fullscreenControl: false,
    disableDefaultUI: true
  });

  const markerOptions = useRef({
    position: {
      lat: 49.7380304,
      lng: 31.5169775
    },
    icon: {
      url: markerIcon,
      scaledSize: {
        width: 25,
        height: 25
      }
    }
  });

  const onClickMarker = useCallback(() => {
    setIsPanorama(true);
  }, []);

  const closePanorama = useCallback(() => {
    setIsPanorama(false);
  }, []);

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_KEY}>
      <GoogleMap mapContainerStyle={mapContainerStyle.current} options={mapOptions.current}>
        {isPanorama ? (
          <>
            <StreetViewPanorama options={panoramaOptions.current} />
            <div className="map__close-panorama" onClick={closePanorama} title="Вернуться к карте">
              <TiArrowBack />
            </div>
          </>
        ) : (
          <Marker options={markerOptions.current} onClick={onClickMarker} />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
