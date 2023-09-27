import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux/actions/store/getCategories";

import CategoryCard from "../components/CategoryCard/CategoryCard"

const Categories = () => {

  const dispatch = useDispatch()
  
  const categories = useSelector((state) => state.store.categories)
  
  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  return (
  <div>
    {
        categories?.map(cat => (
            <CategoryCard
            id={cat.id}
            image={cat.image_path}
            name={cat.name}            
            />
        ))
    }


  </div>

);};

export default Categories;
