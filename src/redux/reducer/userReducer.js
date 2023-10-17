const initialState = {
    newUser : '',
    user: {},
    isAuthenticated: false
}

const userReducer = ( state = initialState, action) => {
    switch (action.type) {
        case "CREATE_USER":
            return {...state, newUser : action.payload}
        
        case "LOGIN":
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true
              };
        case "LOGOUT":
        return {
            ...state,
            user: {},
            isAuthenticated: false,
        };
        default:
            return state
    }
}

export default userReducer;