import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../redux/actions/store/getBrands";

import BrandCard from "../components/BrandCard/BrandCard"


const Brands = () => {

  const dispatch = useDispatch()
  
  const brands = useSelector((state) => state.store.brands)
  
  useEffect(() => {
    dispatch(getBrands())
  }, [dispatch])


console.log(brands, 'BRANDS');

  return (
    <div className="p-16 flex justify-center">
    {
        brands?.map(cat => (
            <BrandCard
            id={cat.id}
            image={cat.image_path}
            name={cat.name}            
            />
        ))
    }


  </div>
  )
}

export default Brands