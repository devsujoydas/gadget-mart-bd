import { useState } from "react"
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import RecentViewed from "./RecentViewed";
import imgDefault from "../../../public/assets/iPhone-11-Pro-Used.webp"
import { saveItemInLS } from "../utility/Local";
const PhoneDetails = () => {
    const [number, setNumber] = useState(1);
    const increment = () => {
        setNumber(number + 1);
    };

    const decrement = () => {
        setNumber(number - 1);
    };

    const iphones = useLoaderData();

    const selectedId = useParams();

    const iphone = iphones.find((phone) => phone.id === selectedId.phoneId);

    const { id, img, price, brand, model, network, dimensions, weight, sim, display_type, display_size, display_resolution, os, chipset, cpu, memory, main_camera, selfie_camera, sound, battery_info, sensors, other_features, release_date, storage_options } = iphone;
    
    const navigate = useNavigate()
    const goPayment = () => {
        navigate(`/payment/${id}`)
    }
    const addToCart = () =>{
        saveItemInLS(id)
      }

    return (
        <div className="py-10 bg-white min-h-[80vh]">
            <Helmet>
                <title>GM-BD | {`${model}`}</title>
            </Helmet>
            <div className="max-w-screen-2xl lg:mx-auto md:mx-10 mx-6">
                <div className=" flex w-full gap-5 lg:flex-row flex-col">

                    <div className="rounded-xl overflow-hidden grid gap-5 md:justify-start justify-center ">
                        <div className="overflow-hidden rounded-xl border">
                            {/* <img className="w-96   hover:scale-125 transition-all" src={img[0]} alt="" /> */}
                            <img className="w-96   hover:scale-125 transition-all" src={imgDefault} alt="" />
                        </div>
                        <div className="flex gap-2 justify-center flex-wrap w-96 items-center">
                            {img.map((url, index) => (
                                <img key={index} src={url} alt={`iPhone 11 ${index + 1}`} className="w-20 rounded-lg border" />
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-6  ">
                        <img className="w-12" src="https://adminapi.applegadgetsbd.com/storage/media/thumb/Apple-6176.png" alt="" />

                        <h1 className="text-xl font-semibold -mt-5">{model}</h1>

                        <div className="flex gap-3 flex-wrap">
                            <p className="bg-gray-100 px-3 py-2"> Price: <span className="font-semibold">${price}</span></p>
                            <p className="bg-gray-100 px-3 py-2">Status: In Stock</p>
                            <p className="bg-gray-100 px-3 py-2">Product Code: {id}</p>
                        </div>

                        <div className="flex gap-3 ">
                            <p className="bg-gray-100 px-3 py-2">EMI Available</p>
                            <p className="bg-gray-100 px-3 py-2">Exchange</p>
                        </div>

                        <h1 className="text-xl font-semibold"> 1 Year Official Warranty Support for Australia , Dubai &  Singapore Variant  Only</h1>

                        <div id="storageBtn" className="flex gap-4 items-center">
                            <h1>Storage: </h1>
                            <div className="flex gap-3 flex-wrap text-black">
                                {
                                    storage_options.map((storage, idx) => (
                                        <button key={idx} className="bg-gray-100 px-3 py-1 active:bg-[#F27F20] rounded active:text-white transition-all">{storage}</button>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="flex gap-4 items-center">
                            <div className="border border-[#F27F20] rounded text-xl flex justify-center items-center md:gap-4 gap-2 md:px-4 px-2">
                                <button onClick={decrement} className="text-2xl  md:mb-2 scale-105 active:scale-95 transition-all mb-1 md:mt-1">-</button>
                                <span className="md:px-4 px-2 md:py-1 border-[#F27F20] border-l border-r rounded bg-gray-50 text-[#F27F20]">{number}</span>
                                <button onClick={increment} className="text-2xl  md:mb-2 scale-105 active:scale-95 transition-all mb-1 md:mt-1">+</button>
                            </div>
                            <button onClick={goPayment} className="bg-[#F27F20] transition-all  text-white md:px-4 px-2 md:py-2 py-1 rounded hover:bg-transparent hover:border-black border border-transparent active:scale-95 hover:text-[#F27F20]">Buy Now</button>
                            <button onClick={addToCart} className="hover:bg-[#F27F20] text-[#F27F20] active:scale-95  hover:text-white border border-black hover:border-transparent transition-all md:px-4 px-2 md:py-2 py-1 rounded">Add To Card</button>
                        </div>
                    </div>
                </div>




                <div className=" my-8 p-4 border border-gray-300 rounded-lg shadow-lg">

                    <div className="grid lg:grid-cols-3 gap-5">

                        {/* Specifications */}
                        <div className="lg:col-span-2 border-2 pt-4 rounded-lg">
                            <h1 className="text-2xl font-bold mb-4 text-center">Specifications</h1>
                            <div className="flex text-lg">
                                <h1 className="md:w-1/6 w-5/12 text-gray-700 font-semibold border p-2">Brand:</h1>
                                <h1 className="md:w-5/6 w-8/12 text-gray-900 border p-2">{brand}</h1>
                            </div>
                            <div className="flex text-lg">
                                <h1 className="md:w-1/6 w-5/12 text-gray-700 font-semibold border p-2">Model:</h1>
                                <h1 className="md:w-5/6 w-8/12 text-gray-900 border p-2">{model}</h1>
                            </div>
                            <div className="flex text-lg">
                                <h1 className="md:w-1/6 w-5/12 text-gray-700 font-semibold border p-2">Network:</h1>
                                <h1 className="md:w-5/6 w-8/12 text-gray-900 border p-2">{network}</h1>
                            </div>
                            <div className="flex text-lg">
                                <h1 className="md:w-1/6 w-5/12 text-gray-700 font-semibold border p-2">Dimensions:</h1>
                                <h1 className="md:w-5/6 w-8/12 text-gray-900 border p-2">{dimensions}</h1>
                            </div>
                            <div className="flex text-lg">
                                <h1 className="md:w-1/6 w-5/12 text-gray-700 font-semibold border p-2">Weight:</h1>
                                <h1 className="md:w-5/6 w-8/12 text-gray-900 border p-2">{weight}</h1>
                            </div>
                            <div className="flex text-lg">
                                <h1 className="md:w-1/6 w-5/12 text-gray-700 font-semibold border p-2">SIM:</h1>
                                <h1 className="md:w-5/6 w-8/12 text-gray-900 border p-2">{sim}</h1>
                            </div>
                            <div className="flex text-lg">
                                <h1 className="md:w-1/6 w-5/12 text-gray-700 font-semibold border p-2">Display Type:</h1>
                                <h1 className="md:w-5/6 w-8/12 text-gray-900 border p-2">{display_type}</h1>
                            </div>
                            <div className="flex text-lg">
                                <h1 className="md:w-1/6 w-5/12 text-gray-700 font-semibold border p-2">Display Size:</h1>
                                <h1 className="md:w-5/6 w-8/12 text-gray-900 border p-2">{display_size}</h1>
                            </div>
                            <div className="flex text-lg">
                                <h1 className="md:w-1/6 w-5/12 text-gray-700 font-semibold border p-2">Display Resolution:</h1>
                                <h1 className="md:w-5/6 w-8/12 text-gray-900 border p-2">{display_resolution}</h1>
                            </div>
                            <div className="flex text-lg">
                                <h1 className="md:w-1/6 w-5/12 text-gray-700 font-semibold border p-2">OS:</h1>
                                <h1 className="md:w-5/6 w-8/12 text-gray-900 border p-2">{os}</h1>
                            </div>
                            <div className="flex text-lg">
                                <h1 className="md:w-1/6 w-5/12 text-gray-700 font-semibold border p-2">Chipset:</h1>
                                <h1 className="md:w-5/6 w-8/12 text-gray-900 border p-2">{chipset}</h1>
                            </div>
                            <div className="flex text-lg">
                                <h1 className="md:w-1/6 w-5/12 text-gray-700 font-semibold border p-2">CPU:</h1>
                                <h1 className="md:w-5/6 w-8/12 text-gray-900 border p-2">{cpu}</h1>
                            </div>
                            <div className="flex text-lg">
                                <h1 className="md:w-1/6 w-5/12 text-gray-700 font-semibold border p-2">Memory:</h1>
                                <h1 className="md:w-5/6 w-8/12 text-gray-900 border p-2">{memory}</h1>
                            </div>
                            <div className="flex text-lg">
                                <h1 className="md:w-1/6 w-5/12 text-gray-700 font-semibold border p-2">Main Camera:</h1>
                                <h1 className="md:w-5/6 w-8/12 text-gray-900 border p-2">{main_camera}</h1>
                            </div>
                            <div className="flex text-lg">
                                <h1 className="md:w-1/6 w-5/12 text-gray-700 font-semibold border p-2">Selfie Camera:</h1>
                                <h1 className="md:w-5/6 w-8/12 text-gray-900 border p-2">{selfie_camera}</h1>
                            </div>
                            <div className="flex text-lg">
                                <h1 className="md:w-1/6 w-5/12 text-gray-700 font-semibold border p-2">Sound:</h1>
                                <h1 className="md:w-5/6 w-8/12 text-gray-900 border p-2">{sound}</h1>
                            </div>
                            <div className="flex text-lg">
                                <h1 className="md:w-1/6 w-5/12 text-gray-700 font-semibold border p-2">Battery Info:</h1>
                                <h1 className="md:w-5/6 w-8/12 text-gray-900 border p-2">{battery_info}</h1>
                            </div>
                            <div className="flex text-lg">
                                <h1 className="md:w-1/6 w-5/12 text-gray-700 font-semibold border p-2">Sensors:</h1>
                                <h1 className="md:w-5/6 w-8/12 text-gray-900 border p-2">{sensors}</h1>
                            </div>
                            <div className="flex text-lg">
                                <h1 className="md:w-1/6 w-5/12 text-gray-700 font-semibold border p-2">Release Date:</h1>
                                <h1 className="md:w-5/6 w-8/12 text-gray-900 border p-2">{release_date}</h1>
                            </div>
                            <div className="flex text-lg">
                                <h1 className="md:w-1/6 w-5/12 text-gray-700 font-semibold border p-2">Other Features / Info:</h1>
                                <h1 className="md:w-5/6 w-8/12 text-gray-900 border p-2">{other_features}</h1>
                            </div>
                        </div>


                        {/* Recent Viewes section  */}
                        <RecentViewed iphone={iphone} />

                    </div>

                </div>
            </div>
        </div>
    )
}

export default PhoneDetails