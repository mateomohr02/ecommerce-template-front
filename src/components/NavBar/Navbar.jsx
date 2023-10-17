import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'
import ExpandOptions from './ExpandOptions';


const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)
  
  const expand = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className="h-20 flex items-center justify-center bg-gray-800 text-white">
      <Link className="text-xl mx-4 hover:text-gray-300" to="/store">
        Inicio
      </Link>
      <Link className="text-xl mx-4 hover:text-gray-300" to="/categories">
        Categorias
      </Link>
      <Link className="text-xl mx-4 hover:text-gray-300" to="/brands">
        Marcas
      </Link>
      <Link className="text-xl mx-4 hover:text-gray-300" to="/storeadmin">
        Admin Dashboard
      </Link> 
      <button className="text-xl mx-4" onClick={expand}>
        <FaUserCircle size={28}/>
        {showMenu && <ExpandOptions/>}
      </button> 
      
    </div>
  );
};

export default Navbar;
