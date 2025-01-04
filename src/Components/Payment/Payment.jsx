import { useState } from "react";

const Payment = () => {
    const formHandler = e => {
        e.preventDefault()
    }
    const [number, setNumber] = useState(1);
    const increment = () => {
        setNumber(number + 1);
    };
    const decrement = () => {
        setNumber(number - 1);
    };
    return (
        <div className="my-28">
            <div id="confirm" className="max-w-screen-2xl lg:mx-auto mx-10 grid md:grid-cols-2 gap-5 grid-cols-1" >
                <div className="grid gap-5 ">
                    <h1 className="text-2xl font-medium">Payment Method</h1>
                    <div className="bg-gray-200 w-fit p-2 flex gap-2 rounded-lg text-xl font-medium">
                        <button className="bg-white p-2 rounded-lg">Cash On Delivery</button>
                        <button className="bg-white p-2 rounded-lg">Online Payment</button>
                    </div>
                    <h1 className="text-2xl font-medium">Billing Details</h1>
                    <form action="" className="flex flex-col text-xl gap-2">
                        <label htmlFor="full-name">Full Name <span className="text-red-500">*</span></label>
                        <input type="text" id="full-name" name="full-name" placeholder="Full Name" className="border px-4 py-2 rounded-md" />
                        <label htmlFor="phone-number">Phone Number <span className="text-red-500">*</span></label>
                        <input type="number" id="phone-number" name="phone-number" placeholder="Phone Number" className="border px-4 py-2 rounded-md" />
                        <label htmlFor="address">Full Address <span className="text-red-500">*</span></label>
                        <textarea type="text" id="address" name="address" placeholder="Address" className="border px-4 py-2 rounded-md" />
                        <div className="flex justify-between items-center mt-8">
                            <div className="text-lg flex items-center gap-2">
                                <input type="checkbox" />
                                <h1>I have read andd agree to the <a href="#confirm" className="text-[#F27F20]">Terms and Conditions</a> and <a href="#confirm" className="text-[#F27F20]">Privacy Policy</a></h1>
                            </div>
                            <button onClick={formHandler} className="bg-[#F27F20] font-medium text-white px-4 py-2 rounded-md hover:bg-transparent active:scale-95 border hover:border-black hover:text-black transition-all">Confirm</button>
                        </div>

                    </form>
                </div>

                <div className="p-10 bg-gray-100 rounded-lg">
                    <h1 className="text-2xl font-medium pb-2">Your Order</h1>
                    <div className="grid gap-5">

                        <div className="flex justify-between items-center border hover:shadow-lg rounded-md p-1 overflow-hidden transition-all">
                            <div className="flex gap-3 ">
                                <img className="md:w-28 w-28" src="https://adminapi.applegadgetsbd.com/storage/media/thumb/iPhone-16-Pro-Max---16-Pro-Black-Titanium-2734.jpg" alt="" />
                                <div className="grid gap-2">
                                    <h1 className="text-xl md:font-medium">iPhone 16 Pro Max</h1>
                                    <h1 className="text-[#F27F20] font-medium ">256GB</h1>
                                    <button  className="bg-[#F27F20] font-medium text-white px-4 py-2 rounded-md hover:bg-transparent active:scale-95 border hover:border-black hover:text-black transition-all">View Details</button>
                                </div>
                            </div>
                            <div>
                                <div className="border border-gray-400 rounded w-fit  flex justify-center items-center gap-2  p-1">
                                    <button onClick={decrement} className="scale-105 active:scale-95 transition-all  px-1">-</button>
                                    <span className="md:px-2  bg-gray-200 ">{number}</span>
                                    <button onClick={increment} className=" scale-105 active:scale-95 transition-all px-1 ">+</button>
                                </div>
                                <h1 className="text-center text-[#F27F20] font-medium">156400</h1>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <input type="number" id="phone-number" name="phone-number" placeholder="Coupon Code" className="border px-4 py-2 rounded-md w-full" />
                            <button className="px-14 py-2 bg-gray-300 rounded-md text-xl font-semibold text-white hover:bg-[#F27F20] transition-all">Apply</button>
                        </div>

                        <div className="grid gap-3">
                            <div className="text-gray-600 font-medium flex items-center justify-between text-xl">
                                <h1>Subtotal</h1>
                                <h1>BDT 49550</h1>
                            </div>
                            <div className="text-gray-600 font-medium flex items-center justify-between text-xl">
                                <h1>Delivery Charge</h1>
                                <h1 className="text-xs">will be added</h1>
                            </div>
                            <div className="text-gray-600 border-t-2 py-3 border-gray-300 font-medium flex items-center justify-between text-xl">
                                <h1>Total</h1>
                                <h1>BDT 50000</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment