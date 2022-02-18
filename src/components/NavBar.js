import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-center text-white text-xl font-bold">
              <div>
                <Link to="/">CaféReactivo</Link>
              </div> 
              <div className="flex-1 flex items-center justify-center">
                <div className="flex space-x-3">
                  <Link to="/category/1" className="bg-gray-500 text-white px-3 py-2 rounded-md text-sm font-bold">Bebidas</Link>
                  <Link to="/category/2" className="bg-gray-500 text-white px-3 py-2 rounded-md text-sm font-bold">Cafe en Grano</Link>
                  <Link to="/category/3" className="bg-gray-500 text-white px-3 py-2 rounded-md text-sm font-bold">Cafe Molido</Link>
                </div>
              </div>
            </div>
            <CartWidget qty="3"/>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;