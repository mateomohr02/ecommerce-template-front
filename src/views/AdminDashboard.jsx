import React from 'react'
import { Link } from 'react-router-dom'
import ProductManager from '../components/Admin/ProductManager'

const AdminDashboard = () => {
  return (
    <div className='p-4 flex justify-evenly'>  
        <ProductManager/>
        <div>
        <Link to="/storeadmin/brand"> Administrar Marcas </Link>
        <Link to="/storeadmin/categories"> Administrar Categorías </Link>
        <Link to="/storeadmin/add"> Agregar Productos </Link>
        </div>
    </div>
  )
}

export default AdminDashboard