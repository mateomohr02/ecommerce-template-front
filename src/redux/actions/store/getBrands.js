import axios from 'axios';

export const getBrands = () => {
    return async (dispatch) => {
        try {
          const response = await axios.get(`/store/brands`);
          const brands = response.data
          
          console.log(brands, 'MARCAS ACTION');

          dispatch({ type: 'GET_BRANDS', payload: brands });
        } catch (error) {

         console.log("Something happened while fetching the product ", error)
        }
      };
}