import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BrandEditor from '../components/Admin/BrandEditor'
import { getBrands } from '../redux/actions/store/getBrands'


const AdminBrands = () => {

  const dispatch = useDispatch()

  const brands = useSelector((state) => state.store.brands);

  useEffect(() => {
    dispatch(getBrands())
  },[dispatch])

  useEffect(() => {
    setLocalBrands(brands)
  },[brands])

  const handleImage = (id) => {
    setAdder(id)
  }

  const [adder, setAdder] = useState(null)

  const [localBrands, setLocalBrands] = useState([])

  return (
    <div>
      <table>
        <thead className='border border-black'>
          <tr className=' bg-blue-200'>
          <th className='px-6 py-3 border border-black'> ID </th>
          <th className='px-32 py-3 border border-black'> Nombre </th>
          <th className='px-16 py-3 border border-black'> Imágen </th>
          </tr>
        </thead>
        <tbody>
          {localBrands.map(b => (
          <tr>
            <td className='whitespace-no-wrap py-3'>{b.id}</td>
            <td className='whitespace-no-wrap py-3'>{b.name}</td>
            <td className='whitespace-no-wrap py-3'>{ b.image_path ? <img className='w-6' src={b.image_path} alt={b.image_path}></img> : <button onClick={() => handleImage(b.id)}>Agregar</button>}</td>
            <td></td>
    
          </tr>
          ))}
        </tbody>
      </table>

      {
        adder ? <BrandEditor id={adder}/> : null
      }


    </div>
  )
}

export default AdminBrands