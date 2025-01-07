const getStoreCart = () => {
  const storedCart = localStorage.getItem('cart')
  if (storedCart) {
    return JSON.parse(storedCart)
  }
  return []
}

const saveStoredCart = id => {
  const storedCarts = getStoreCart()
  const existItem = storedCarts.find(phoneId => phoneId === id)
  if (!existItem) {
    storedCarts.push(id)
    localStorage.setItem('cart', JSON.stringify(storedCarts))
  }
}

export { getStoreCart, saveStoredCart }
