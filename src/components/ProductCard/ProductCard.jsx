import React from 'react'
import { Link } from 'react-router-dom'


const ProductCard = ({ id, name, brandName, price, image}) => {
  return (
    <Link to={`/store/${id}`} key={id} className='w-1/6 border border-slate-300 rounded-sm p-3 m-2 bg-slate-100 hover:bg-slate-200 duration-100' onClick={()=>{}}>
        <img src={image} alt={name} className='rounded border my-1'/>
        <p className='font-medium text-left font-sans text-lg antialiased'>{`${name}  ${brandName}`}</p>
        <p className='font-normal text-left font-sans text-lg antialiased'>$ {price}</p>
    </Link>
  )
}

export default ProductCard