import axios from 'axios';

export const getCategoryProducts = (id) => {
    return async (dispatch) => {
        try {
          const response = await axios.get(`/store/categories/${id}`);
          const products = response.data
    
          dispatch({ type: 'GET_CATEGORY_PRODUCTS', payload: products });
        } catch (error) {

         console.log("Something happened while fetching the product ", error)
        }
      };
}