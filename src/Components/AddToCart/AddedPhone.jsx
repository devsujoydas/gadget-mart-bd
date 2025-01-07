/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

const AddedPhone = ({ iphone, }) => {
  const { id, brand, model, price, img, rating } = iphone;
  const navigate = useNavigate()

  const navigateHandler = () => {
    navigate(`${id}`)
  }

  const goPayment = () => {
    navigate(`/payment/${id}`)
  }

  return (
    <div className="border rounded-xl p-4 bg-white">

      <button onClick={navigateHandler}>
        <div className="overflow-hidden">
          <img className="w-full hover:scale-125 transition-all" src={img[0]} alt="" />
          {/* <img className="w-full hover:scale-125 transition-all" src={imgDefault} alt="" /> */}
        </div>
        <div className="text-left">
          <h1 className="text-gray-400">{brand}</h1>
          <h1 className="font-semibold text-xl my-2">{model}</h1>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="font-semibold hover:text-[#F27F20] transition-all">${price}</h1>
          <p className="flex items-center justify-center">Rating : {rating}</p>
        </div>
      </button>
      <div className="flex justify-center items-center text-xs">
        <button onClick={goPayment} className="bg-[#F27F20] mt-2 text-white px-4 py-2 rounded-md hover:bg-emerald-400 active:scale-95 transition-all">Buy Now</button>
      </div>
    </div>
  )
}

export default AddedPhone