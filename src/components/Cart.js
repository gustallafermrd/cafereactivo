import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

const Cart =() => {
  const prueba = useContext(CartContext);
  return (
    <>
      <div className="w-full text-center">
        <h1 className="text-xl title-font tracking-widest">Tu carrito!</h1>
      </div>
      <div className="flex flex-wrap text-center m-4">
        <Link to='/'><button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Ve a Comprar</button></Link>
        {
          (prueba.cartList.length > 0)
          ? <button onClick={prueba.removeList} className="flex ml-auto text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-700 rounded">Borrar todos los Productos</button>
          : <h2>Tu Carrito esta Vacio</h2>
        }
      </div>

      <div className="w-full h-full">
      {  
        prueba.cartList.length > 0 &&
          prueba.cartList.map(item => (
            <>
              <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-4 py-4 mx-auto">
                  <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                      <img className="lg:w-1/2 w-full lg:h-auto h-12 object-cover object-center rounded" src={item.image} alt={item.name}/>
                      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-xl title-font tracking-widest">Nombre: {item.name}</h2>
                        <h3 className="text-md title-font tracking-widest">Precio: {item.price}</h3>
                        <h4 className="text-md title-font tracking-widest">Cantidad: {item.qtyItem}</h4>
                        <p className="text-md title-font tracking-widest">Total: ${prueba.totalCart()}</p>
                        <button onClick={prueba.deleteProd} className="flex text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-700 rounded">Eliminar</button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
          ))
      }
      </div>
    </>
  )
}

export default Cart;