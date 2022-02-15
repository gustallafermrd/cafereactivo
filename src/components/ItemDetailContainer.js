import { useEffect, useState } from 'react';
import ItemDetail from "./ItemDetail";
import { list, getList } from './data.js';

function ItemDetailContainer() {
  const [dato, setDato] = useState([]);

  useEffect(() => {
    getList(list[3], 2000)
      .then(response => setItems(response))
      .catch(error => console.log(error));
  }, []);

  return (
    <ItemDetail item="dato" />
  )
}
export default ItemDetailContainer;