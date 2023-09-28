export const clearBrandProducts = () => {
    return (dispatch) => {
        dispatch({ type: 'CLEAR_BRAND_PRODUCTS'});
    }
}