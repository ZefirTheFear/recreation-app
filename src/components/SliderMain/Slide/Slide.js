import React, { useRef, useEffect, useCallback } from "react";

import "./Slide.scss";

const Slide = ({ id, isActive, src, nextSlide }) => {
  const video = useRef();

  const onEndVideo = useCallback(() => {
    console.log(`${id} has ended`);
    nextSlide();
    // video.current.currentTime = 0;
  }, [id, nextSlide]);

  useEffect(() => {
    video.current.addEventListener("ended", onEndVideo);
  }, [onEndVideo]);

  useEffect(() => {
    if (isActive) {
      video.current.currentTime = 0;
      video.current.play();
    } else {
      video.current.pause();
    }
  }, [isActive]);

  return (
    <div className={"slide" + (isActive ? " slide_active" : "")}>
      <video className="slide__vid" src={src} muted ref={video} />
    </div>
  );
};

export default Slide;
