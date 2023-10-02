import axios from 'axios';

export const updateProductStatus = (id) => {
    return async (dispatch) => {
        try {
          const response = await axios.put(`/store/admin/product/${id}`);
          const productUpdated = response.data;
    
          dispatch({ type: 'UPDATE_PRODUCT_STATUS', payload: productUpdated });
        } catch (error) {
         console.log("Something happened while updating the product status", error)
        }
      };
}