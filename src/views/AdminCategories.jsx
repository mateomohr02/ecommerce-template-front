import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CategoryEditor from '../components/Admin/CategoryEditor'
import { getCategories } from '../redux/actions/store/getCategories'


const AdminCategories = () => {

  const dispatch = useDispatch()

  const categories = useSelector((state) => state.store.categories);

  useEffect(() => {
    dispatch(getCategories())
  },[dispatch])

  useEffect(() => {
    setLocalCategories(categories)
  },[categories])

  const handleImage = (id) => {
    setAdder(id)
  }

  const [adder, setAdder] = useState(null)

  const [localCategories, setLocalCategories] = useState([])

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
          {localCategories.map(b => (
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
        adder ? <CategoryEditor id={adder}/> : null
      }


    </div>
  )
}

export default AdminCategories