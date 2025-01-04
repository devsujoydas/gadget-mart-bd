import Marquee from "./Slider/Marquee/Marquee"
import Slider from "./Slider/Slider1/Slider"
import Slider2 from "./Slider/Slider2/Slider2"

const Hero = () => {
    return (
        <div className="">
            <div className="flex flex-col gap-2">
                <div style={{ backgroundImage: 'url("https://www.apple.com/v/home/bx/images/heroes/iphone-16-pro/hero_iphone16pro_avail__fnf0f9x70jiy_largetall.jpg")', }} className="lg:min-h-[80vh] min-h-[25vh] bg-cover bg-center ">
            
            </div>


                <Slider />
                

                <div style={{ backgroundImage: 'url("https://www.apple.com/v/home/bx/images/heroes/iphone-16/hero_iphone16_avail__euwzls69btea_largetall.jpg")', }} className="lg:min-h-[70vh] min-h-[25vh] bg-cover bg-center "></div>

                <div style={{ backgroundImage: 'url("https://www.apple.com/v/home/bx/images/heroes/apple-watch-series-10/hero_apple_watch_series_10_avail_lte__esu66gaw6dci_largetall.jpg")', }} className="lg:min-h-[70vh] min-h-[25vh] bg-cover bg-center "></div>
            </div>

            <div className="grid md:grid-cols-2 gap-2 my-2 md:my-5">
                <img src="https://www.apple.com/v/home/bx/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_large.jpg" alt="" />
                <img src="https://www.apple.com/v/home/bx/images/promos/apple-watch-ultra-2/promo_apple_watch_ultra2_avail__dyawbjw9cowi_large.jpg" alt="" />
                <img src="https://www.apple.com/v/home/bx/images/promos/macbook-pro/promo_macbookpro_announce__gdf98j6tj2ie_large.jpg" alt="" />
                <img src="https://www.apple.com/v/home/bx/images/promos/ipad-air/promo_ipadair_ai__3fv1eitzqv6y_large.jpg" alt="" />
            </div>

            <div className="md:my-5 my-2">
                <Slider2 />
            </div>

            <div className="md:my-2 my-2">
                <Marquee />
            </div>

        </div>
    )
}

export default Hero