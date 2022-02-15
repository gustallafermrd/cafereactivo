
const ItemDetail = ({ image, description, cost, name }) => {
  return (
    <div className="wrapper">
      <div className="image">
        {image}
      </div>
      <div className="text">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{cost}</p>
      </div>
    </div>
  )
}
export default ItemDetail;
