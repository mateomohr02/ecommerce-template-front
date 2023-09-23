export const clearDetailProduct = () => {
    return (dispatch) => {
        dispatch({ type: 'CLEAR_DETAIL_PRODUCT'});
    }
}