import { useState } from "react"
import FormForCash from "./FormForCash"
import FormForOnline from "./FormForOnline"

const CashOnDelivery = () => {
    const [formToggler, setFormToggler] = useState(true);
    const [btnStyleCash, setBtnStyleCash] = useState("bg-white p-2 rounded-lg active:scale-95 transition-all");
    const [btnStyleOnline, setBtnStyleOnline] = useState("p-2 rounded-lg active:scale-95 transition-all");

    const falseFormToggler = () => {
        setFormToggler(false)
        setBtnStyleCash('p-2 rounded-lg active:scale-95 transition-all')
        setBtnStyleOnline("bg-white p-2 rounded-lg active:scale-95 transition-all")
    }
    const trueFormToggler = () => {
        setFormToggler(true)
        setBtnStyleOnline('p-2 rounded-lg active:scale-95 transition-all')
        setBtnStyleCash("bg-white p-2 rounded-lg active:scale-95 transition-all")
    }

    return (
        <div>
            <div className="grid gap-5 ">
                <h1 className="text-2xl font-medium">Payment Method</h1>
                <div className="bg-gray-200 w-fit p-2 flex gap-2 rounded-lg text-lg md:text-xl font-medium">
                    <button onClick={trueFormToggler} className={btnStyleCash}>Cash On Delivery</button>
                    <button onClick={falseFormToggler} className={btnStyleOnline}>Online Payment</button>
                </div>
                <h1 className="text-2xl font-medium">Billing Details</h1>
                <div>
                    {formToggler ? <FormForCash /> : <FormForOnline />}
                </div>
            </div>
        </div>
    )
}

export default CashOnDelivery