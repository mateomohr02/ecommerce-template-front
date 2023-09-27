import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({id, name, image}) => {
  return (
    <div className="w-64">
      <Link  to={`/categories/${id}`}>
        <img src={image} alt={name} className='rounded border my-1'/>
        <p className='font-medium text-center font-sans text-lg antialiased'>{`${name}`}</p>
      </Link>
    </div>
  )
}

export default CategoryCard