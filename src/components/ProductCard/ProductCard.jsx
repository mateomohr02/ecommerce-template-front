import React from 'react'

import style from './ProductCard.module.css'

const ProductCard = ({ id, name, brand, description, price, image}) => {

  return (
    <div className={style.container} key={id}>
        <p>{`${name} - ${brand}`}</p>
        <img className={style.image}src={image} alt={name} />
        <p>{description}</p>
        <p>$ {price}</p>
    </div>
  )
}

export default ProductCard