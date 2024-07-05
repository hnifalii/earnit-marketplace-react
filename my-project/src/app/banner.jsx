import React, { Component } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

// Icons
import {
  IoIosArrowForward,
  IoIosArrowBack,
} from "react-icons/io";

// Data
import useFetch from "../hooks/useFetch";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <IoIosArrowForward
        size={34}
        style={{
          ...style,
          display: "block",
          position: "absolute",
          color: "#43bde4",
          marginTop: "-20",
          left:"0"
        }}
      />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <IoIosArrowBack
        size={34}
        style={{
          ...style,
          display: "block",
          position: "absolute",
          color: "#43bde4",
          marginTop: "-20",
          right: "0",
        }}
      />
    </div>
  );
}

function CustomSlide(props) {
  const { index, ...otherProps } = props;
  return (
    <div {...otherProps}>
      <div className="flex justify-center object-contain rounded-lg overflow-hidden">
        <img src={index} />
      </div>
    </div>
  );
}

function Banner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
  };

  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/banners?populate=*"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  console.log(data);

  return (
    <>
      <div className="flex justify-center mt-4">
        <div className="w-screen max-w-[1000px] rounded-lg">
          <Slider {...settings} className="rounded-lg border h-screen max-h-[252px]">
            <CustomSlide index={`http://localhost:1337${data.data[0].attributes.img.data[0].attributes.url}`} />
            <CustomSlide index={`http://localhost:1337${data.data[0].attributes.img.data[1].attributes.url}`} />
            <CustomSlide index={`http://localhost:1337${data.data[0].attributes.img.data[2].attributes.url}`} />
            {/* <CustomSlide index={`http://localhost:1337${data.data[0].attributes.img.data[3].attributes.url}`} /> */}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Banner;
