const ItemDetail = ({ item }) => {
  return (
    <div className="wrapper">
      <div className="image">
        {item.image}
      </div>
      <div className="text">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p>{item.cost}</p>
      </div>
    </div>
  )
}
export default ItemDetail;
