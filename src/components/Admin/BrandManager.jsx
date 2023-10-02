import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getBrands } from '../../redux/actions/store/getBrands'
import BrandManagerCard from './BrandManagerCard'

const BrandManager = () => {

    const dispatch = useDispatch()

    const brands = useSelector((state) => state.store.brands)

    useEffect(() => {
        dispatch(getBrands())
    }, [dispatch])

  return (
    <div>

    {
        brands.map(brand => 
            <BrandManagerCard
            id={brand.id}
            name={brand.name}
            image={brand.image}
            />)
    }

    </div>
  )
}

export default BrandManager