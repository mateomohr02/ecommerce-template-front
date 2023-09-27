import React, { useEffect } from 'react'
import ProductCard from '../components/ProductCard/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCategoryProducts } from '../redux/actions/store/getCategoryProducts'
import { clearCategoryProducts } from '../redux/actions/store/clearCategoryProducts'

const CategoryDetail = () => {
  

  const { id } = useParams()
  const dispatch = useDispatch()

  const products = useSelector((state) => state.store.categoryProducts)

  useEffect(() => {
    dispatch(getCategoryProducts(id))
    return () => dispatch(clearCategoryProducts())
  }, [dispatch, id])
  
  return (
    <div className='flex flex-row flex-wrap justify-center '>
      {
        products?.map(product => (
            <ProductCard
            id={product.id}
            image={product.image_path}
            name={product.name}
            brandName={product.brandName}
            description={product.description}
            price={product.price}
            />
        ))
    }
    

    </div>
  )
}

export default CategoryDetail