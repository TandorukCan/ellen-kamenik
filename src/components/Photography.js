import { useState, useEffect } from "react";
import Slider from "react-slick";
import img1 from "../assets/Styling/1.jpeg";
import img2 from "../assets/Styling/2.jpeg";
import img3 from "../assets/Styling/3.jpeg";
import img4 from "../assets/Styling/4.jpeg";
import img5 from "../assets/Styling/5.jpeg";
import img6 from "../assets/Styling/6.jpeg";
import img7 from "../assets/Styling/7.jpeg";
import img8 from "../assets/Styling/8.jpeg";
import img9 from "../assets/Styling/9.jpeg";
import img10 from "../assets/Styling/10.jpeg";
import img11 from "../assets/Styling/11.jpeg";
import img12 from "../assets/Styling/12.jpeg";
import img13 from "../assets/Styling/13.png";
import img14 from "../assets/Styling/14.png";
import img15 from "../assets/Styling/15.jpeg";
import img16 from "../assets/Styling/16.jpeg";
import img17 from "../assets/Styling/17.jpeg";
import img18 from "../assets/Styling/18.jpeg";

import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import Arrow from "./Arrow";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
];

function Photography() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <MdArrowForwardIos />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <MdArrowBackIos />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    // slidesToShow: 5,
    // later to be changed to 3
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  // useEffect(() => {
  //   const firstSlide = document.querySelectorAll(".slick-active")[0];

  // }, []);

  return (
    <section className="Photography">
      <h1>Photography & Styling</h1>
      {/* <div className="PhotoCarouselWrapper"> */}
      {/* later to be changed to the class above */}
      <div className="ImgCarouselWrapper">
        <Slider {...settings}>
          {images.map((img, idx) => {
            return (
              <div
                className={
                  idx === imageIndex
                    ? "imgCar activeImgCar"
                    : idx === imageIndex + 2
                    ? "imgCar lastImgCar"
                    : idx === imageIndex + 1
                    ? "imgCar nextImgCar"
                    : idx === imageIndex - 1
                    ? "imgCar prevImgCar"
                    : idx === imageIndex - 2
                    ? "imgCar firstImgCar"
                    : "imgCar"
                }
              >
                <img src={img} alt={img} />
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="arrowWrapperFour">
        <Arrow />
      </div>
    </section>
  );
}
export default Photography;
