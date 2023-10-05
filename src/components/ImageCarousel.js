import { useState } from "react";
import Slider from "react-slick";
import img1 from "../assets/Photos/1.png";
import img2 from "../assets/Photos/2.jpeg";
import img3 from "../assets/Photos/3.png";
import img4 from "../assets/Photos/4.png";
import img5 from "../assets/Photos/5.jpeg";
import img6 from "../assets/Photos/6.jpeg";
import img7 from "../assets/Photos/7.jpeg";
import img8 from "../assets/Photos/8.jpeg";
import img9 from "../assets/Photos/9.jpeg";
import img10 from "../assets/Photos/10.jpeg";
import img11 from "../assets/Photos/11.jpeg";
import GetInTouchButton from "./GetInTouchButton";

import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

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
];

function ImageCarousel() {
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
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <section>
      <div className="ImgCarouselWrapper">
        <Slider {...settings}>
          {images.map((img, idx) => {
            return (
              <div
                className={
                  idx === imageIndex ? "imgCar activeImgCar" : "imgCar"
                }
              >
                <img src={img} alt={img} />
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="getInTouch">
        <h1>Here you'll find only a few samples of my work.</h1>
        <h2>If you want to know more or discuss a project</h2>
        <GetInTouchButton />
      </div>
    </section>
  );
}
export default ImageCarousel;
