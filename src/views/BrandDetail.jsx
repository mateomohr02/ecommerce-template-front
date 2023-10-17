import React, { useEffect } from 'react'
import ProductCard from '../components/ProductCard/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getBrandProducts } from '../redux/actions/store/getBrandProducts'
import { clearBrandProducts } from '../redux/actions/store/clearBrandProducts'

const BrandDetail = () => {
  

  const { id } = useParams()
  const dispatch = useDispatch()

  const products = useSelector((state) => state.store.brandProducts)

  useEffect(() => {
    dispatch(getBrandProducts(id))
    return () => dispatch(clearBrandProducts())
  }, [dispatch, id])
  
  return (
    <div className='flex flex-row flex-wrap justify-center '>
      {products?.map(product => (
      product.show ? (
        <ProductCard
          key={product.id}  
          id={product.id}
          image={product.image_path}
          name={product.name}
          brandName={product.brandName}
          description={product.description}
          price={product.price}
        />
      ) : null
    ))}
    

    </div>
  )
}

export default BrandDetail