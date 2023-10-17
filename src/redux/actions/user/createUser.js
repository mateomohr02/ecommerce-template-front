import axios from 'axios';

export const createUser = (user) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('/user/create', user);
            const responseData = response.data;
  
            if (!responseData.success) {
              alert(responseData.message);
            } else {
              alert(responseData.message);
            }
          
          } catch (error) {
            console.log("ERROR", error.message);
          }
      };
}