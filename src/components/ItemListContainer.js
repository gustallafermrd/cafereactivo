import { useEffect, useState } from 'react';
import ItemList from "./ItemList";
import { list, getList } from './data.js';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const {category} = useParams();

  useEffect(() => {
    if (category === undefined) {
      getList(list, 2000)
        .then(response => setItems(response))
        .catch(error => console.log(error));
    } else{
        getList(list.filter(item => item.categoryId === parseInt(category)), 2000)
          .then(response => setItems(response))
          .catch(error => console.log(error));
      }
    }, [category]);

  return (
    <div className='grid lg:grid-cols-4 m-2'>
      <ItemList lista={items} />
    </div>
  )
}
export default ItemListContainer;