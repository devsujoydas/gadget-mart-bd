import { Helmet } from "react-helmet-async";
import CashOnDelivery from "./CashOnDelivery";
import YourOrder from "./YourOrder";

const Payment = () => {

    return (
        <div className="md:my-28 my-10">
            <Helmet>
                <title>Gadgets | Payment</title>
            </Helmet>
            <div id="confirm" className="max-w-screen-2xl lg:mx-auto md:mx-20 mx-8 grid lg:grid-cols-2 gap-10 grid-cols-1" >
                <CashOnDelivery />
                <YourOrder />
            </div>
        </div>
    )
}

export default Payment