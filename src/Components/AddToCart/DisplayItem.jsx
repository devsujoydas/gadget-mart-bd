/* eslint-disable react/prop-types */
import AddedPhone from "../AddToCart/AddedPhone";

const DisplayItem = ({ displayItem }) => {

    return (
        <div>
            <div className="m-5 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 pt-2">
                {displayItem.map((item, idx) => (<AddedPhone key={idx} iphone={item} />))}
            </div>
        </div>
    )
}

export default DisplayItem