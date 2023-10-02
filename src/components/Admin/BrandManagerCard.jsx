import React from 'react'
import Link from 'react-dom'


const BrandManagerCard = ({id, name, image}) => {
  return (
    <div key={id}>
        <p>{name}</p>
        { image ? <img src={image} alt={name}/> : <Link to={`/storeadmin/brand/editor/${id}`}>Añadir imágen</Link>}
    </div>
  )
}

export default BrandManagerCard