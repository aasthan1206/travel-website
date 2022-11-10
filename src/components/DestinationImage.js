import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import { manali } from "../utils/ImageData";

const DestinationImage = () => {
  return (
    <div className="mx-4">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {manali.map((m) => (
            <SwiperSlide>
                <img src={m.image} alt="" className="h-96 w-96"/>
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default DestinationImage
