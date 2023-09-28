import axios from 'axios';

export const getBrandProducts = (id) => {
    return async (dispatch) => {
        try {
          const response = await axios.get(`/store/brands/${id}`);
          const products = response.data
    
          dispatch({ type: 'GET_BRAND_PRODUCTS', payload: products });
        } catch (error) {

         console.log("Something happened while fetching the products ", error)
        }
      };
}