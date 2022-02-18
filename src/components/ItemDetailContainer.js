import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { list, getList } from './data.js';
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
  const [dato, setDato] = useState([]);
  const {itemId} = useParams();
  
  useEffect(() => {
    getList(list.find(item => item.id === parseInt(itemId)), 2000)
      .then(response => setDato(response))
      .catch(error => console.log(error));
  }, []);
  
  return (
    <ItemDetail item={dato} />
  )
}
export default ItemDetailContainer;