import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/core";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import getstarted from "../assets/getstarted.jpeg";
import howtofreelance from "../assets/howtofreelance.webp";
import improve from "../assets/improve.jpg";
import ultimateguide from "../assets/ultimateguide.png";
import work from "../assets/work.png";

SwiperCore.use([Navigation, Autoplay]);

export default function Carousel() {
  const images = [getstarted, howtofreelance, improve, ultimateguide, work];

  return (
    <Swiper
      className="m-8"
      navigation
      autoplay={{ delay: 2000 }}
      spaceBetween={50}
      slidesPerView={2}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} style={{ height: "300px" }}>
          <img
            src={image}
            alt={`Slide ${index}`}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
