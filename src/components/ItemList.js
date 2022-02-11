import Item from './Item';

function ItemList({ lista }) {
  return(
    lista.map( (item, index) =>(
      <Item
        key={index}
        name={item.name}
        description={item.description}
        cost={item.cost}
        image={item.image}
      />)
    )
  )
}

export default ItemList;