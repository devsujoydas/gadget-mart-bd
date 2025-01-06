/* eslint-disable no-unused-vars */
import { Helmet } from "react-helmet-async";
import CashOnDelivery from "./CashOnDelivery";
import YourOrder from "./YourOrder";
import { useLoaderData, useParams } from "react-router-dom";

const Payment = () => {
    const iphones = useLoaderData();

    const selectedId = useParams();

    const iphone = iphones.find((phone) => phone.id === selectedId.phoneId);

    const { id, img, price, brand, model, network, dimensions, weight, sim, display_type, display_size, display_resolution, os, chipset, cpu, memory, main_camera, selfie_camera, sound, battery_info, sensors, other_features, release_date, storage_options } = iphone;
    
    return (
        <div className="md:my-28 my-10">
            <Helmet>
                <title>Gadgets | Payment</title>
            </Helmet>
            <div id="confirm" className="max-w-screen-2xl lg:mx-auto md:mx-20 mx-8 grid lg:grid-cols-2 gap-10 grid-cols-1" >
                <CashOnDelivery />
                <YourOrder img={img} model={model} price={price} storage_options={storage_options}/>
            </div>
        </div>
    )
}

export default Payment