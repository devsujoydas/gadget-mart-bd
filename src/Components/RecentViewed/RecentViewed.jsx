/* eslint-disable react/prop-types */


const RecentViewed = ({iphone}) => {
    const {img, model, price} = iphone;
    return (
        <div>
            <div className="lg:col-span-1 border-2 pt-4 rounded-lg">
                <h1 className="text-2xl font-bold mb-4 text-center">Recently Viewed</h1>
                <hr className="mx-2" />
                <div className="my-5 mx-2">

                    <div className="flex items-center border hover:shadow-lg rounded-md p-1 overflow-hidden transition-all">
                        <img className="md:w-36 w-28" src={img[0]} alt="" />
                        <div className="flex flex-col gap-1">
                            <h1 className="text-xl md:font-medium">{model}</h1>
                            <h1 className="text-[#F27F20] font-medium">{price}</h1>
                            <div>
                                <button className="bg-[#F27F20] active:scale-95 transition-all font-semibold text-white md:px-4 px-2 md:py-2 py-1 rounded hover:bg-transparent hover:border-black border border-transparent hover:text-black">Buy Now</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default RecentViewed