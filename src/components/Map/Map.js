import React, { useState, useRef, useCallback } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  // InfoWindow,
  StreetViewPanorama
} from "@react-google-maps/api";
import { MdArrowBack } from "react-icons/md";

import mapStyles from "../../data/mapStyles.js";
// import markerIcon from "../../assets/logo_as_marker.svg";
import markerIcon from "../../assets/marker.svg";

import variables from "../../utils/_variables.scss";

import "./Map.scss";

const Map = () => {
  // console.log(JSON.stringify(mapStyles));

  const [isPanorama, setIsPanorama] = useState(false);
  // const [zoomed, setZoomed] = useState(0);

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
    height: `calc(100vh - ${variables.headerHeight})`,
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
        width: 35,
        height: 35
      }
    }
  });

  // const infoWindowOptions = useRef({
  //   position: {
  //     lat: 49.7390304,
  //     lng: 31.5169775
  //   }
  // });

  // const onZoomChanged = useCallback(() => {
  //   setZoomed((zoomed) => zoomed + 1);
  // }, []);

  const onClickMarker = useCallback(() => {
    setIsPanorama(true);
  }, []);

  const closePanorama = useCallback(() => {
    setIsPanorama(false);
  }, []);

  return (
    <LoadScript
    // googleMapsApiKey={process.env.REACT_APP_GOOGLE_KEY}
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle.current}
        options={mapOptions.current}
        // onZoomChanged={onZoomChanged}
      >
        {isPanorama ? (
          <>
            <StreetViewPanorama options={panoramaOptions.current} />
            <div className="map__close-panorama" onClick={closePanorama} title="Вернуться к карте">
              <MdArrowBack />
            </div>
          </>
        ) : (
          <>
            <Marker options={markerOptions.current} onClick={onClickMarker} />
            {/* {zoomed > 1 ? null : (
              <InfoWindow options={infoWindowOptions.current}>
                <div className="map__info-window">нажми. мы где-то тут</div>
              </InfoWindow>
            )} */}
          </>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
