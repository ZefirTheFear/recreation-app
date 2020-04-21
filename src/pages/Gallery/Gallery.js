import React, { useState, useRef, useCallback, useEffect } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";

import Img1 from "../../assets/images/gallery/0001.jpg";
import Img2 from "../../assets/images/gallery/0002.jpg";
import Img3 from "../../assets/images/gallery/0003.jpg";
import Img4 from "../../assets/images/gallery/0004.jpg";
import Img5 from "../../assets/images/gallery/0005.jpg";
import Img6 from "../../assets/images/gallery/0006.jpg";
import Img7 from "../../assets/images/gallery/0007.jpg";
import Img8 from "../../assets/images/gallery/0008.jpg";

import "./Gallery.scss";

const Gallery = () => {
  const images = useRef([
    {
      id: 0,
      description: "палаточный лагерь перед заселением",
      img: Img1
    },
    {
      id: 1,
      description: "палаточный лагерь перед заселением",
      img: Img2
    },
    {
      id: 2,
      description: "палатка",
      img: Img3
    },
    {
      id: 3,
      description: "лодка",
      img: Img4
    },
    {
      id: 4,
      description: "лежаки",
      img: Img5
    },
    {
      id: 5,
      description: "вода",
      img: Img6
    },
    {
      id: 6,
      description: "закат",
      img: Img7
    },
    {
      id: 7,
      description: "закат",
      img: Img8
    }
  ]);

  const [isModalSliderShown, setIsModalSliderShown] = useState(true);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (isModalSliderShown) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
  }, [isModalSliderShown]);

  const showSlider = useCallback((e) => {
    setActiveImage(+e.currentTarget.getAttribute("data-id"));
    setIsModalSliderShown(true);
  }, []);

  const closeSlider = useCallback(() => {
    setIsModalSliderShown(false);
  }, []);

  const previousSlide = useCallback(() => {
    if (activeImage > 0) {
      setActiveImage((curImg) => curImg - 1);
    } else {
      setActiveImage(images.current.length - 1);
    }
  }, [activeImage]);

  const nextSlide = useCallback(() => {
    setActiveImage((curImg) => curImg + 1);
  }, []);

  return (
    <main className="gallery">
      {images.current.map((img) => (
        <div className="gallery__card" key={img.id} data-id={img.id} onClick={showSlider}>
          <div className="gallery__img-container">
            <img className="gallery__img" src={img.img} alt="img" />
          </div>
          <p>{img.description}</p>
        </div>
      ))}
      {isModalSliderShown ? (
        <div className="gallery__slider">
          <div className="gallery__slider-mobile-control-prev">
            <IoMdArrowRoundBack onClick={previousSlide} />
          </div>
          <div className="gallery__slides-container">
            <div className="gallery__close-slider" onClick={closeSlider}>
              <IoIosCloseCircle />
            </div>
            {images.current.map((img) => (
              <div
                key={img.id}
                className={
                  "gallery__single-slide" +
                  (activeImage % images.current.length === img.id
                    ? " gallery__single-slide_active"
                    : "")
                }
              >
                <div className="gallery__slider-img-container">
                  <img className="gallery__img" src={img.img} alt="img" />
                </div>
                <p>{img.description}</p>
              </div>
            ))}
          </div>
          <div className="gallery__slider-mobile-control-next">
            <IoMdArrowRoundForward onClick={nextSlide} />
          </div>
          <div className="gallery__slider-controls">
            <IoMdArrowRoundBack onClick={previousSlide} />
            <IoMdArrowRoundForward onClick={nextSlide} />
          </div>
        </div>
      ) : null}
    </main>
  );
};

export default Gallery;
