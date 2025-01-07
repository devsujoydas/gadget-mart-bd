import { useLoaderData } from "react-router-dom";
import { getItemFromLS } from "../utility/Local";
import { useEffect, useState } from "react";
import DisplayItem from "./DisplayItem";

const AddToCart = () => {
    const iphones = useLoaderData() || [];
    console.log("iPhones:", iphones);

    const [addedItem, setAddedItem] = useState([]);
    const [displayItem, setDisplayItem] = useState([]);

    useEffect(() => {
        const phoneIdFromLS = getItemFromLS() || []; // Ensure it returns an array
        if (iphones.length > 0) {
            const itemAdded = [];
            for (const id of phoneIdFromLS) {
                const iphone = iphones.find(iphone => iphone.id === id);
                if (iphone) itemAdded.push(iphone);
            }
            setAddedItem(itemAdded);
            setDisplayItem(itemAdded);
        }
    }, [iphones]);

    console.log("Added Items:", addedItem);
    console.log("Display Items:", displayItem);

    return (
        <div>
            <div className="max-w-screen-2xl md:mx-auto mx-10 my-10">
                <h1 className="font-semibold text-3xl text-center">Added Items</h1>
                <h1>Phones Length : {displayItem.length}</h1>

                <DisplayItem displayItem={displayItem}/>
            </div>
        </div>
    );
};

export default AddToCart;
