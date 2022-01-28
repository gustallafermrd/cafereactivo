import CartWidget from "./CartWidget";
const NavBar = () => {
  return (
    <>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-center text-white text-xl font-bold">
              <div>
                CaféReactivo
              </div> 
              <div className="flex-1 flex items-center justify-center">
                <div className="flex space-x-3">
                  <a href="#" className="bg-gray-500 text-white px-3 py-2 rounded-md text-sm font-bold">Cafe en Grano</a>
                  <a href="#" className="bg-gray-500 text-white px-3 py-2 rounded-md text-sm font-bold">Cafe Molido</a>
                  <a href="#" className="bg-gray-500 text-white px-3 py-2 rounded-md text-sm font-bold">Cafeteras</a>
                </div>
              </div>
            </div>
            <CartWidget />
          </div>
        </div>
      </nav>
    </>
  );

}
export default NavBar;