import React, { useState, useRef, useCallback } from "react";
import { GoogleMap, useLoadScript, Marker, StreetViewPanorama } from "@react-google-maps/api";
import { MdArrowBack } from "react-icons/md";

import mapStyles from "../../data/mapStyles.js";
import markerIcon from "../../assets/marker.svg";

import variables from "../../utils/_variables.scss";

import "./Map.scss";

function Map() {
  const { isLoaded, loadError } = useLoadScript({
    // googleMapsApiKey: "AIzaSyDeyOL4XsjSdXiolUI7kiLhJyEMRop_U24"
  });

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

  const onClickMarker = useCallback(() => {
    setIsPanorama(true);
  }, []);

  const closePanorama = useCallback(() => {
    setIsPanorama(false);
  }, []);

  const renderMap = () => {
    return (
      <GoogleMap mapContainerStyle={mapContainerStyle.current} options={mapOptions.current}>
        {isPanorama ? (
          <>
            <StreetViewPanorama options={panoramaOptions.current} />
            <div className="map__close-panorama" onClick={closePanorama} title="Вернуться к карте">
              <MdArrowBack />
            </div>
          </>
        ) : null}
        <Marker
          options={markerOptions.current}
          onClick={onClickMarker}
          animation={!isPanorama ? window.google.maps.Animation.BOUNCE : null}
          visible={!isPanorama}
        />
      </GoogleMap>
    );
  };

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  return isLoaded ? renderMap() : <div>wait pls</div>;
}

export default Map;
