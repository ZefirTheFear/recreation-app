import React, { useRef, useState, useCallback } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Slide from "./Slide/Slide";

import Vid1 from "../../assets/videos/kaniv.mp4";
import Vid2 from "../../assets/videos/wat.mp4";
import Vid3 from "../../assets/videos/land.mp4";
import Vid4 from "../../assets/videos/tent.mp4";

import PreviewImg1 from "../../assets/videos/preview_img/kan-pr.jpg";
import PreviewImg2 from "../../assets/videos/preview_img/wat-pr.jpg";
import PreviewImg3 from "../../assets/videos/preview_img/land-pr.jpg";
import PreviewImg4 from "../../assets/videos/preview_img/night-pr.jpg";

import * as headerActions from "../../store/actions/headerActions";

import "./SliderMain.scss";

const SliderMain = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(headerActions.makeHeaderTransparent());
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(headerActions.makeHeaderOpaque());
    };
  }, [dispatch]);

  const slidesData = useRef([
    {
      id: 0,
      src: Vid1,
      previewSrc: PreviewImg1,
      description: `канев`
    },
    {
      id: 1,
      src: Vid2,
      previewSrc: PreviewImg2,
      description: `отдых на воде`
    },
    {
      id: 2,
      src: Vid3,
      previewSrc: PreviewImg3,
      description: `развлечения на суше`
    },
    {
      id: 3,
      src: Vid4,
      previewSrc: PreviewImg4,
      description: `ночевка на природе`
    }
  ]);

  const nextSlide = useCallback(() => {
    setActiveSlide((curState) => curState + 1);
  }, []);

  // const intervalValue = useRef(10000);
  // const interval = useRef();
  // useEffect(() => {
  //   interval.current = setInterval(nexSlide, intervalValue.current);
  // }, [nextSlide]);

  const changeSlide = (e) => {
    setActiveSlide(+e.currentTarget.getAttribute("data-id"));
    // clearInterval(interval.current);
    // interval.current = setInterval(nextSlide, intervalValue.current);
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
