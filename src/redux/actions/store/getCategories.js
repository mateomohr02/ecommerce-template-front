import axios from 'axios';

export const getCategories = () => {
    return async (dispatch) => {
        try {
          const response = await axios.get(`/store/categories`);
          const categories = response.data
    
          dispatch({ type: 'GET_CATEGORIES', payload: categories });
        } catch (error) {

         console.log("Something happened while fetching the product ", error)
        }
      };
}