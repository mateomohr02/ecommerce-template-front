export const clearUpdateCategory = () => {
    return (dispatch) => {
        dispatch({ type: 'CLEAR_UPDATE_CATEGORY'});
    }
}