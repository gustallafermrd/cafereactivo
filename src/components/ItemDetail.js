import { useContext, useState } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
 

const ItemDetail = ({ item }) => {
  const [itemCount, setItemtCount] = useState(0);
  const prueba = useContext(CartContext);

  const onAdd = (qty) => {
    alert('has seleccionado ' + qty);
    setItemtCount(qty);
    prueba.addToCart(item, qty);
  }

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={item.image} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-xl title-font tracking-widest">{item.name}</h2>
              
              <p className="leading-relaxed">{item.description}</p>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">${item.cost}</span>
                
              </div>
              {
                itemCount === 0 ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                : <Link to='/cart'><button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Checkout</button></Link>
              }
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default ItemDetail;