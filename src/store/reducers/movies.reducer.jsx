export const movieReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'GET_MOVIE':
            return [payload];
            break;
        default:
            break;
    }
}