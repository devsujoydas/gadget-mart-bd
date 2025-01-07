import { useLoaderData } from "react-router-dom";
import { getItemFromLS } from "../utility/Local";
import { useEffect, useState } from "react";

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
            <div>
                <h1>hi</h1>
                {displayItem.map(item => (
                    <div key={item.id}>{item.name}</div>
                ))}
            </div>
        </div>
    );
};

export default AddToCart;
