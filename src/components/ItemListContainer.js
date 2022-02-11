import { useEffect, useState } from 'react';
import ItemList from "./ItemList";
import { list, getList } from './data.js';

function ItemListContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getList(list, 2000)
      .then(response => setItems(response))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='grid lg:grid-cols-4 m-2'>
      <ItemList lista={items} />
    </div>
  )
}
export default ItemListContainer;