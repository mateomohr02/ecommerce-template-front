
const initialState = {
    products: [],
    product: {},
    createProduct: [],
    cart: [],
    categories: [],
    categoryProducts: [],
    brands: [],
    brandProducts: [],
    updateBrand: false,
    updateCategory: false 
}

const storeReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case "GET_PRODUCTS":
            return { ...state, products: action.payload };

        case "GET_DETAIL_PRODUCT":
            return {...state, product: action.payload}
        
        case "CLEAR_DETAIL_PRODUCT":
            return {...state, product: {}}

        case "CREATE_PRODUCT":
            return { ...state, createProducts: action.payload };

        case "GET_CATEGORIES":
            return { ...state, categories: action.payload }

        case "GET_CATEGORY_PRODUCTS":
            return { ...state, categoryProducts: action.payload }
        
        case "CLEAR_CATEGORY_PRODUCTS":
            return {...state, categoryProducts: []}

        case "GET_BRANDS":
            return { ...state, brands: action.payload }

        case "GET_BRAND_PRODUCTS":
            return { ...state, brandProducts: action.payload }
        
        case "CLEAR_BRAND_PRODUCTS":
            return {...state, brandProducts: []}

        case "UPDATE_CATEGORY_IMAGE":
            return{...state, updateCategory: true}
        
        case "UPDATE_BRAND_IMAGE":
            return{...state, updateBrand: true}

        case "CLEAR_UPDATE_BRAND":
            return{...state, updateBrand: false}
        
        case 'CLEAR_UPDATE_CATEGORY':
            return{...state, updateCategory: false}

        default:
            return state;
    }
}

export default storeReducer;