import axios from 'axios';

export const getProductDetail = (productId) => {
    return async (dispatch) => {
        try {
          const response = await axios.get(`/store/products/${productId}`);
          const product = response.data
    
          dispatch({ type: 'GET_DETAIL_PRODUCT', payload: product });
        } catch (error) {

         console.log("Something happened while fetching the product ", error)
        }
      };
}