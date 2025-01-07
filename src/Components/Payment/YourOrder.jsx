/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import imgDefault from "../../../public/assets/iPhone-11-Pro-Used.webp"
import { useState } from "react";
const YourOrder = ({ img, model, price, storage_options }) => {

    const [number, setNumber] = useState(1);
    const [subTotal, setSubTotal] = useState(price)
    const [totalPrice, setTotalPrice] = useState(price)

    const increment = () => {
        setNumber(number + 1);
        setSubTotal(price * number)
        setTotalPrice(price * number)
    };
    const decrement = () => {
        setNumber(number - 1);
        setSubTotal(price * number)
        setTotalPrice(price * number)
    };


    return (
        <div className="md:p-10 p-5 bg-gray-100 rounded-lg">
            <h1 className="text-2xl font-medium pb-2">Your Order</h1>
            <div className="grid gap-5">

                <div className="flex justify-between   items-center border  rounded-md p-1 overflow-hidden transition-all gap-3">
                    <div className="flex gap-3  ">
                        <img className="md:w-28 w-20" src={img[0]} alt="" />
                        {/* <img className="md:w-28 w-20" src={imgDefault} alt="" /> */}
                        <div className="grid gap-2">
                            <h1 className="md:text-xl md:font-medium">{model}</h1>
                            <h1 className="text-[#F27F20] font-medium md:text-xl text-xs ">{storage_options[0]}</h1>
                            <div>
                                <button className="bg-[#F27F20] font-medium text-white px-2 py-1 md:px-4 md:py-2 rounded-md hover:bg-transparent active:scale-95 border hover:border-black hover:text-black transition-all md:text-xl text-xs">View Details</button>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <div className="border border-gray-400 rounded w-fit  flex justify-center items-center gap-2  p-1">
                            <button onClick={decrement} className="scale-105 active:scale-95 transition-all  px-1">-</button>
                            <span className="md:px-2  bg-gray-200 ">{number}</span>
                            <button onClick={increment} className=" scale-105 active:scale-95 transition-all px-1 ">+</button>
                        </div>
                        <h1 className="text-center text-[#F27F20] font-medium">${price}</h1>
                    </div>
                </div>

                <div className="flex gap-3">
                    <input type="number" id="phone-number" name="phone-number" placeholder="Coupon Code" className="border px-4 py-2 rounded-md w-full" />
                    <button className="md:px-14 px-8 py-2 active:scale-95 bg-gray-300 rounded-md text-xl font-semibold text-white hover:bg-[#F27F20] transition-all">Apply</button>
                </div>

                <div className="grid gap-3">
                    <div className="text-gray-600 font-medium flex items-center justify-between text-xl">
                        <h1>Subtotal</h1>
                        <h1>USD ${subTotal}</h1>
                    </div>
                    <div className="text-gray-600 font-medium flex items-center justify-between text-xl">
                        <h1>Delivery Charge</h1>
                        <h1 className="text-xs">will be added</h1>
                    </div>
                    <div className="text-gray-600 border-t-2 py-3 border-gray-300 font-medium flex items-center justify-between text-xl">
                        <h1>Total</h1>
                        <h1>USD ${totalPrice}</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default YourOrder