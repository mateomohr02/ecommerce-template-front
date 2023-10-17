import axios from 'axios';

export const updateBrandImage = (id, imgUrl) => {
    return async (dispatch) => {
        try {
          const response = await axios.put(`/store/brands/${id}`, { imgUrl });
          const brandUpdated = response.data;
    
          dispatch({ type: 'UPDATE_BRAND_IMAGE', payload: brandUpdated });
        } catch (error) {
         console.log("Something happened while updating the Brand", error)
        }
      };
}