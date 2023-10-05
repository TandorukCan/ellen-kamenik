import { useState } from "react";
import Slider from "react-slick";
import img1 from "../assets/carousel/3hundred60.jpeg";
import img2 from "../assets/carousel/BinThereDonateThat.jpeg";
import img3 from "../assets/carousel/CarabiNautica.jpeg";
import img4 from "../assets/carousel/Laertis.jpeg";
import img5 from "../assets/carousel/LaurenLind.jpeg";
import img6 from "../assets/carousel/PoetryBlossoms.jpeg";
import img7 from "../assets/carousel/ScentAndSenses.jpeg";
import img8 from "../assets/carousel/WhiteButterflyHolistics.jpeg";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

function ThreeDCarousel() {
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
    <section className="CarouselWrapper">
      <h1>Logo design and illustration</h1>
      <div>
        <Slider {...settings}>
          {/* <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
          <img src={img7} alt="" />
          <img src={img8} alt="" /> */}
          {images.map((img, idx) => {
            return (
              <div
                className={idx === imageIndex ? "slide activeSlide" : "slide"}
              >
                <img src={img} alt={img} />
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
export default ThreeDCarousel;
