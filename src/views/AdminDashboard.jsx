import React from 'react'
import { Link } from 'react-router-dom'
import ProductManager from '../components/Admin/ProductManager'

const AdminDashboard = () => {
  return (
    <>  
        <ProductManager/>

        <Link to="/storeadmin/brand"> Administrar Marcas </Link>
        <Link to="/storeadmin/category"> Administrar Categorías </Link>
        <Link to="/storeadmin/add"> Agregar Productos </Link>
    </>
  )
}

export default AdminDashboard