import React, { useState } from 'react';

const ItemCount = ({ stock, onAdd }) => {
  const [counter, setCounter] = useState(1);
  const agregar = ()=> onAdd(counter);

  const sumarCantidad = ()=> counter+1 <= stock ? setCounter(counter + 1) : setCounter(counter);
  const restarCantidad = ()=> counter-1 >= 1 ? setCounter(counter - 1) : setCounter(1);

  return (
    <div className="w-56 border-2 border-solid rounded-xl text-center p-2 m-auto">
      <div className="grid grid-flow-col place-items-center">
        <button className="bg-red-500 border-solid rounded-xl text-white w-1/2 p-1" onClick={restarCantidad}> - </button>
        <span>{counter}</span>
        <button className="bg-green-500 border-solid rounded-xl text-white w-1/2 p-1" onClick={sumarCantidad}> + </button>
      </div>
      <br />
      <button onClick={agregar} className="text-white bg-teal-800 border-0 py-2 px-6 focus:outline-none hover:bg-teal-500 rounded">Agregar al carrito</button>
    </div>
  );
}
export default ItemCount;