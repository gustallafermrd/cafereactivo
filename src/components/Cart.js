import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

const Cart =() => {
  const prueba = useContext(CartContext);
  return (
    <>
      <h1>Tu carrito!</h1>
      <Link to='/'>Seguir Comprando</Link>
      {
        (prueba.cartList.length > 0)
        ? <button onClick={prueba.removeList}>Borrar todos los Productos</button>
        : <h2>Tu Carrito esta Vacio</h2>
      }

      {
        prueba.cartList.length > 0 &&
          prueba.cartList.map(item => (
            <>
              <p>Producto: {item.name}</p>
              <p>Precio: {item.price}</p>
              <p>Cantidad: {item.qtyItem}</p>
              <img src={item.image} alt={item.name}/>
              <button onClick={prueba.deleteProd}>Eliminar</button>
              <p>Total: ${prueba.totalCart()}</p>
            </>
          ))
      }
    </>
  )
}

export default Cart;