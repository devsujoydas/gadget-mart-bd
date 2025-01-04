
const Payment = () => {
    const formHandler = e => {
        e.preventDefault()
    }
    return (
        <div className="my-10">
            <div id="confirm" className="max-w-screen-2xl lg:mx-auto mx-10 grid md:grid-cols-2 grid-cols-1" >
                <div className="grid gap-5 border">
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

                <div className="px-10">
                <h1 className="text-2xl font-medium">Our Order</h1>
                </div>
            </div>
        </div>
    )
}

export default Payment