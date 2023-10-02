import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/actions/store/getProducts'
import { updateProductStatus } from '../../redux/actions/store/updateProductStatus'

const ProductManager = () => {
  
  const dispatch = useDispatch()

  const [localProducts, setLocalProducts] = useState([]);
  
  const products = useSelector((state) => state.store.products)
  
  const handleStatus = (id) => {
    // Llamar a la acción para actualizar el estado del producto
    dispatch(updateProductStatus(id));
    
    // Actualizar el estado local con el nuevo estado del producto
    const updatedProducts = localProducts.map((p) => {
      if (p.id === id) {
        return {
          ...p,
          show: !p.show,
        };
      }
      return p;
    });
    setLocalProducts(updatedProducts);
  };
  
  useEffect(() => {
    dispatch(getProducts())
  },[dispatch])

  useEffect(() => {
    // Actualizar el estado local cuando cambia la lista de productos
    setLocalProducts(products);
  }, [products]);

  return (
    <div>
      <table>
        <thead className='border border-black'>
          <tr className=' bg-blue-200'>
          <th className='px-6 py-3 border border-black'> ID </th>
          <th className='px-32 py-3 border border-black'> Nombre </th>
          <th className='px-16 py-3 border border-black'> Marca </th>
          <th className='px-12 py-3 border border-black'> Precio </th>
          <th className='px-12 py-3 border border-black'> Administrar </th>
          </tr>
        </thead>
        <tbody>
          {localProducts.map(p => (
          <tr>
            <td className='whitespace-no-wrap py-3'>{p.id}</td>
            <td className='whitespace-no-wrap py-3'>{p.name}</td>
            <td className='whitespace-no-wrap py-3'>{p.brandName}</td>
            <td className='whitespace-no-wrap py-3'>$ {p.price}</td>
            <td><Link to={`/storeadmin/modify/${p.id}`}> Modificar </Link> <button onClick={() => handleStatus(p.id)}>{ p.show ? " Pausar " : " Reanudar "}</button></td>
          </tr>
          ))}
        </tbody>
      </table>

      
    </div>
  )
}

export default ProductManager