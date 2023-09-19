import axios from 'axios';

export const getProducts = () => {
    return async (dispatch) => {
        try {
          const response = await axios.get('/store/products');
          const products = response.data;
    
          dispatch({ type: 'GET_PRODUCTS', payload: products });
        } catch (error) {

         console.log("An error ocurred while fetching the products", error)
        }
      };
}