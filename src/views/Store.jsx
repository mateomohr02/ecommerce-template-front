import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";

import { getProducts } from '../redux/actions/store/getProducts';

import ProductCard from '../components/ProductCard/ProductCard';

const Store = () => {

    const dispatch = useDispatch();

    const products = useSelector((state) => state.store.products);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    console.log(products, 'PRODUCTOS');

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

export default Store