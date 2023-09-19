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

    return (
  <>
    {
        products?.map(product => (
            <ProductCard
            key={product.id}
            image={product.image_path}
            name={product.name}
            brand={product.brand}
            description={product.description}
            price={product.price}
            
            />
        ))
    }
  
  </>
  )
}

export default Store