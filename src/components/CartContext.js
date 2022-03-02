import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item, qty) => {
    let found = cartList.find(product => product.idItem === item.id);
    if(found === undefined) {
      setCartList([
        ...cartList,
        {
        id: item.id,
        name: item.name,
        image: item.image[0],
        price: item.cost,
        qtyItem: qty
      }]);
    } else {
      found.qtyItem += qty
    }
  }

  const deleteProd = (id) => {
    setCartList(cartList.filter(el => el.id !== id))
  }

  const removeList = () => {
    setCartList([])
  }

  const calcItemsQty = (id) => {
    let quantities = cartList.map(item => item.qtyItem);
    return quantities.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
  }

  const totalCart = ()=> {
    return cartList.reduce((acc, itemCart) => (acc += (itemCart.qtyItem * itemCart.item.price)),0);
}

  return (
    <CartContext.Provider value={{cartList, addToCart, deleteProd, removeList, calcItemsQty, totalCart}}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;