// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Slider.css'

// import required modules
import { Autoplay } from 'swiper/modules';

const Slider = () => {
    return (
        <>
            <Swiper
                spaceBetween={10}
                centeredSlides={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide className=''><img className="" src="https://www.apple.com/v/home/bx/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_large.jpg" alt="" /></SwiperSlide>
                <SwiperSlide className=''><img className="" src="https://www.apple.com/v/home/bx/images/promos/apple-watch-ultra-2/promo_apple_watch_ultra2_avail__dyawbjw9cowi_large.jpg" alt="" /></SwiperSlide>
                <SwiperSlide className=''><img className="" src="https://www.apple.com/v/home/bx/images/promos/macbook-pro/promo_macbookpro_announce__gdf98j6tj2ie_large.jpg" alt="" /></SwiperSlide>
                <SwiperSlide className=''><img className="" src="https://www.apple.com/v/home/bx/images/promos/ipad-air/promo_ipadair_ai__3fv1eitzqv6y_large.jpg" alt="" /></SwiperSlide>
            </Swiper>
        </>
    );
}
export default Slider