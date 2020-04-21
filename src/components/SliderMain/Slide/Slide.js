import React, { useRef, useEffect, useCallback } from "react";

import variables from "../../../utils/_variables.scss";

import "./Slide.scss";

const Slide = ({ id, isActive, src, description, nextSlide }) => {
  const video = useRef();
  const timer = useRef();

  const onEndVideo = useCallback(() => {
    // console.log(`${id} has ended`);
    nextSlide();
  }, [nextSlide]);

  useEffect(() => {
    video.current.addEventListener("ended", onEndVideo);
  }, [onEndVideo]);

  useEffect(() => {
    if (isActive) {
      video.current.play();
    } else {
      video.current.pause();
      timer.current = setTimeout(() => {
        video.current.currentTime = 0;
      }, variables.changeSlidesTransitionDuration);
    }
  }, [isActive]);

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  return (
    <div className={"slide" + (isActive ? " slide_active" : "")}>
      <video className="slide__vid" src={src} muted ref={video} playsInline />
      <div className="slide__description">
        <pre>{description}</pre>
      </div>
    </div>
  );
};

export default Slide;
