export const clearCategoryProducts = () => {
    return (dispatch) => {
        dispatch({ type: 'CLEAR_CATEGORY_PRODUCTS'});
    }
}