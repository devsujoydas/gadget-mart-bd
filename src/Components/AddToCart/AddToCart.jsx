import { useLoaderData } from "react-router-dom";
import { getItemFromLS } from "../utility/Local"

const AddToCart = () => {
    const phoneIdFromLS = getItemFromLS()
    console.log(phoneIdFromLS);

    const iphones = useLoaderData()
    console.log(iphones);

    return (
        <div>
            <div>
                {phoneIdFromLS.map((phoneid, idx) => <h1 key={idx}>{phoneid}</h1>)}
            </div>
            <div>
                {/* {
                    phones.map((iphone,idx)=> <Phone phone={iphone} key={idx}/>)
                } */}
            </div>
        </div>
    )
}

export default AddToCart