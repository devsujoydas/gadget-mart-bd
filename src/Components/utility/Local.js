const getItemFromLS = () =>{
    const storedItemInLS = localStorage.getItem("cart");
    if (storedItemInLS) {
        return JSON.parse(storedItemInLS)
    }
    return []
}

const saveItemInLS = (id) =>{
    const storedCart = getItemFromLS()
    const exists = storedCart.find(phoneId => phoneId === id)
    if (!exists) {
        storedCart.push(id)
        localStorage.setItem("cart", JSON.stringify(storedCart))
    }
}

export {getItemFromLS, saveItemInLS}