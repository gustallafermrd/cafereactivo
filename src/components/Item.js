import ItemDetail from "./ItemDetail";

function Item({ name, description, cost, image }) {
  return(
    <div className="max-w-xs mx-4 mb-2 rounded-lg shadow-lg">
      <img className="w-full h-48" src={image} alt={name}/>
      <div className="px-6 py-4">
        <h5 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">{name}</h5>
        <p className="leading-normal text-gray-700">{description}</p>
        <p className="text-xl font-semibold text-orange-800">$ {cost}</p>
        <a href={ItemDetail}>Detalles</a>
      </div>
    </div> 
  )
}

export default Item;