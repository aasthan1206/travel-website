import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css"

import { sliderData } from "../utils/DestinationSectionData";

// import required modules
import { Pagination, Navigation } from "swiper";


const DestinationSlider = () => {
  return (
    <div className="mx-4">
        <div className="text-darkblue text-5xl font-main font-black my-12">ICONIC DESTINATIONS</div>
        <Swiper
            // slidesPerView={1}
            // spaceBetween={30}
            loop={true}
            pagination={{
            type: "progressbar",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            {sliderData.map((data) => (
                <SwiperSlide key={data.id}>
                    
                    <div className="flex-col md:flex md:flex-row md:items-center bg-gradient-to-l from-lightblue to-palewhite ">
                        <img src={data.image} alt="" className="lg:w-1/2 lg:h-[75vh] md:w-96 h-80 w-screen"/>
                        <div className="mx-8  px-8 ">
                            <div className="text-5xl text-white font-main font-extrabold my-4">
                                {data.title}
                            </div>
                            <div className="text-white text-main my-2">
                                {data.desc}
                            </div>
                            <button className="bg-lightyellow mt-4 mb-6 px-4 py-2 text-xl text-lightblue font-main font-semibold hover:bg-palewhite">Explore More</button>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            
        </Swiper> 
    </div>
  )
}

export default DestinationSlider

