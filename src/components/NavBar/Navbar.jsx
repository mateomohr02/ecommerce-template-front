import React from 'react'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div>
        <Link to='/store'>Inicio</Link>
        <Link to='/categories'>Categorias</Link>
        <Link to='/brands'>Marcas</Link>
        <Link to='/storeadmin'>Admin Dashboard</Link> 
      </div>
    </div>
  )
}

export default Navbar