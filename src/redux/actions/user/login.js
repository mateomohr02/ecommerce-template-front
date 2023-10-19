import axios from 'axios';

export const login = (user) => {
    return async (dispatch) => {
        try {
            const response = await axios.post("/user/login", user)
            
            if (response.status === 200) {
                
                dispatch({type: "LOGIN", payload: response.data})

                localStorage.setItem("role", response.data.user.role)
                localStorage.setItem("loggedIn", "true");
                localStorage.setItem("id", response.data.user.id);
                localStorage.setItem("token", response.data.token);    
            }
                
        } catch (error) {
            alert("Login Inválido")
        }
      };
}