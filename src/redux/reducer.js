const initialState = {
    breeds: [],
    images: [],
    favorites: [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_BREEDS":
            return { ...state, breeds: action.payload.breeds };
        case "SET_IMAGES":
            return { ...state, images: action.payload.images };
        case "ADD_TO_FAVORITES":
            return {
                ...state,
                favorites: [...state.favorites, action.payload.url],
            };
        default:
            return { ...state };
    }
};
