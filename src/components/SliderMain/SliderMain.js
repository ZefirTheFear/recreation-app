import React, { useRef, useState, useCallback } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Slide from "./Slide/Slide";

import * as headerActions from "../../store/actions/headerActions";

import "./SliderMain.scss";

const SliderMain = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const dispatch = useDispatch();

  const slidesData = useRef([
    {
      id: 0,
      src:
        "https://res.cloudinary.com/ztf/video/upload/v1587717747/river-camping/Home%20Page%20Slider%20Videos/kaniv-panorama.mp4",
      previewSrc:
        "https://res.cloudinary.com/ztf/image/upload/v1587717925/river-camping/Home%20Page%20Slider%20Videos/Preview%20Images/kaniv-pr.jpg",
      description: `кемпинг на Днепре`
    },
    {
      id: 1,
      src:
        "https://res.cloudinary.com/ztf/video/upload/v1587717786/river-camping/Home%20Page%20Slider%20Videos/water.mp4",
      previewSrc:
        "https://res.cloudinary.com/ztf/image/upload/v1587717926/river-camping/Home%20Page%20Slider%20Videos/Preview%20Images/water-pr.jpg",
      description: `отдых на воде`
    },
    {
      id: 2,
      src:
        "https://res.cloudinary.com/ztf/video/upload/v1587717793/river-camping/Home%20Page%20Slider%20Videos/land.mp4",
      previewSrc:
        "https://res.cloudinary.com/ztf/image/upload/v1587717941/river-camping/Home%20Page%20Slider%20Videos/Preview%20Images/land-pr.jpg",
      description: `развлечения на суше`
    },
    {
      id: 3,
      src:
        "https://res.cloudinary.com/ztf/video/upload/v1587717805/river-camping/Home%20Page%20Slider%20Videos/tent.mp4",
      previewSrc:
        "https://res.cloudinary.com/ztf/image/upload/v1587717949/river-camping/Home%20Page%20Slider%20Videos/Preview%20Images/night-pr.jpg",
      description: `ночевка на природе`
    }
  ]);

  const nextSlide = useCallback(() => {
    setActiveSlide((curState) => curState + 1);
  }, []);

  useEffect(() => {
    dispatch(headerActions.makeHeaderTransparent());
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(headerActions.makeHeaderOpaque());
    };
  }, [dispatch]);

  const changeSlide = (e) => {
    setActiveSlide(+e.currentTarget.getAttribute("data-id"));
  };

  return (
    <section className="slider-main">
      {slidesData.current.map((slide) => (
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
        {slidesData.current.map((slide) => (
          <li
            className={
              "slider-main__navigation-item" +
              (activeSlide % slidesData.current.length === slide.id
                ? " slider-main__navigation-item_active"
                : "")
            }
            key={slide.id}
            data-id={slide.id}
            // onClick={() => changeSlide(slide.id)}
            onClick={changeSlide}
          >
            <div className="slider-main__navigation-item-img-container">
              <img className="slider-main__navigation-item-img" src={slide.previewSrc} alt="img" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SliderMain;
