import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay } from 'swiper/modules';

import './Slider2.css';

const Slider2 = () => {
    return (
        <>
            <Swiper
                slidesPerView="2"
                spaceBetween={10}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                modules={[ Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide> <img src="https://is1-ssl.mzstatic.com/image/thumb/C34jADlGtR5wObjPAMbW4w/1250x703.jpg" alt="Slide 1" /> </SwiperSlide>
                <SwiperSlide> <img src="https://is1-ssl.mzstatic.com/image/thumb/_E3bQBkRfwFDVj2heRfLsA/1250x703.jpg" alt="Slide 2" /> </SwiperSlide>
                <SwiperSlide> <img src="https://is1-ssl.mzstatic.com/image/thumb/BtE1Nd7nlabOZ4pkGzee3g/1250x703.jpg" alt="Slide 3" /> </SwiperSlide>
                <SwiperSlide> <img src="https://is1-ssl.mzstatic.com/image/thumb/LEDx4gCVQd_lTJt81zQq8w/1250x703.jpg" alt="Slide 4" /> </SwiperSlide>
                <SwiperSlide> <img src="https://is1-ssl.mzstatic.com/image/thumb/78-I7VenST4ztZYfwMf6AQ/1250x703.jpg" alt="Slide 5" /> </SwiperSlide>
                <SwiperSlide> <img src="https://is1-ssl.mzstatic.com/image/thumb/ageP1PYyLi7UlNiWMva32Q/1250x703.jpg" alt="Slide 6" /> </SwiperSlide>
                <SwiperSlide> <img src="https://is1-ssl.mzstatic.com/image/thumb/S2T1FMcov5a0GzmninlU4Q/1250x703.jpg" alt="Slide 7" /> </SwiperSlide>
                <SwiperSlide> <img src="https://is1-ssl.mzstatic.com/image/thumb/44dJzkosAhD0-ugRepvsfw/1250x703.jpg" alt="Slide 8" /> </SwiperSlide>
                <SwiperSlide> <img src="https://is1-ssl.mzstatic.com/image/thumb/rQ9tx4HlD7su-j1sVFPebg/1250x703.jpg" alt="Slide 9" /> </SwiperSlide>
                <SwiperSlide> <img src="https://is1-ssl.mzstatic.com/image/thumb/p-dFQhrrenz0eg8_smgu9w/1250x703.jpg" alt="Slide 10" /> </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider2;
