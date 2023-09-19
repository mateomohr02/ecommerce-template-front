import axios from 'axios';

export const createProduct = (product) => {
    return async (dispatch) => {
        try {
          const response = await axios.post('/store/products', product);
          const createdProduct = response.data;
    
          dispatch({ type: 'CREATE_PRODUCT', payload: createdProduct });
        } catch (error) {

         console.log("Something happened while creating the product ", error)
        }
      };
}