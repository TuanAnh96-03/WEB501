// src/components/Banner.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
  "https://vtourist.com.vn/wp-content/uploads/2024/05/Ba-Na-Hill.jpg",
  "https://vtourist.com.vn/wp-content/uploads/2024/05/Nha-Trang-1-1536x1058.jpg",
  "https://vtourist.com.vn/wp-content/uploads/2024/05/Da-Lat-1536x1025.jpg"
];

export default function Banner() {
  return (
    <div className="w-full h-64 md:h-[500px] overflow-hidden rounded-lg shadow-lg">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000 }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        slidesPerView={1}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}