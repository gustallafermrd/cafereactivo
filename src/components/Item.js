import { Link } from 'react-router-dom';
const Item = ({ id, name, description, cost, image }) => {
  return(
    
    <div className="max-w-xs mx-4 mb-2 rounded-lg shadow-lg">
      <img className="w-full h-48" src={image} alt={name}/>
      <div className="px-6 py-4">
        <h5 className="mb-3 text-xl font-semibold tracking-tight text-teal-500">{name}</h5>
        <p className="leading-normal text-gray-700">{description}</p>
        <p className="text-xl font-semibold text-teal-900">$ {cost}</p>
      </div>
      <div className="mb-4 px-2">
        <Link to={`/item/${id}`} className="ml-auto text-white bg-teal-800 border-0 py-2 px-6 focus:outline-none hover:bg-teal-500 rounded">Ver Detalles</Link>
      </div>
    </div> 
  )
}

export default Item;