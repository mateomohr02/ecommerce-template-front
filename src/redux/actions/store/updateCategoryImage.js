import axios from 'axios';

export const createProduct = (id, imgUrl) => {
    return async (dispatch) => {
        try {
          const response = await axios.put(`/store/categories/${id}`, imgUrl);
          const categoryUpdated = response.data;
    
          dispatch({ type: 'UPDATE_CATEGORY_IMAGE', payload: categoryUpdated });
        } catch (error) {
         console.log("Something happened while updating the category", error)
        }
      };
}