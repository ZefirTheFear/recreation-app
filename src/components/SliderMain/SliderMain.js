import React, { useRef, useState, useCallback } from "react";

import Slide from "./Slide/Slide";

import Vid1 from "../../assets/videos/kan.mp4";
import Vid2 from "../../assets/videos/wat.mp4";
import Vid3 from "../../assets/videos/land.mp4";
// import Vid4 from "../../assets/video-test/003.mp4";

import "./SliderMain.scss";

const SliderMain = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slidesData = useRef([
    {
      id: 0,
      src: Vid1,
      description: "first"
    },
    {
      id: 1,
      src: Vid2,
      description: "second"
    },
    {
      id: 2,
      src: Vid3,
      description: "third"
    }
    // {
    //   id: 3,
    //   src: Vid4,
    //   description: "fourth"
    // }
  ]);

  const nextSlide = useCallback(() => {
    setActiveSlide(curState => curState + 1);
  }, []);

  // const intervalValue = useRef(10000);
  // const interval = useRef();
  // useEffect(() => {
  //   interval.current = setInterval(nexSlide, intervalValue.current);
  // }, [nextSlide]);

  const changeSlide = id => {
    setActiveSlide(id);
    // clearInterval(interval.current);
    // interval.current = setInterval(nextSlide, intervalValue.current);
  };

  return (
    <section className="slider-main">
      {slidesData.current.map(slide => (
        <Slide
          key={slide.id}
          id={slide.id}
          description={slide.description}
          src={slide.src}
          isActive={activeSlide % slidesData.current.length === slide.id}
          nextSlide={nextSlide}
        />
      ))}
      <ul className="slider-main__navigation">
        {slidesData.current.map(slide => (
          <li
            className={
              "slider-main__navigation-item" +
              (activeSlide % slidesData.current.length === slide.id
                ? " slider-main__navigation-item_active"
                : "")
            }
            key={slide.id}
            onClick={() => changeSlide(slide.id)}
          >
            <div>{slide.id}</div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SliderMain;
