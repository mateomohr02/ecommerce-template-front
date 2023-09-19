
const initialState = {
    products: [],
    product: [],
    createProduct: [],
    cart: [],
}

const storeReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case "GET_PRODUCTS":
            return { ...state, products: action.payload };

        case "GET_DETAIL_PRODUCT":
            return {...state, product: action.payload}

        case "CREATE_PRODUCT":
            return { ...state, createProducts: action.payload };

        default:
            return state;
    }
}

export default storeReducer;