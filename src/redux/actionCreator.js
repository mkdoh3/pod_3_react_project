export const getBreeds = () => {
    return (dispatch) => {
        fetch("https://dog.ceo/api/breeds/list/all")
            .then((res) => res.json())
            .then(({ message }) => {
                const breeds = Object.keys(message);
                dispatch({
                    type: "SET_BREEDS",
                    payload: {
                        breeds,
                    },
                });
            });
    };
};

export const getImages = (event) => {
    return (dispatch) => {
        const breedName = event.target.value;
        const url = `https://dog.ceo/api/breed/${breedName}/images`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                const images = data.message.slice(0, 10);
                dispatch({
                    type: "SET_IMAGES",
                    payload: {
                        images,
                    },
                });
            });
    };
};


export const addToFavorites = (url) => ({
    type: "ADD_TO_FAVORITES",
    payload: {
        url: url
    }
})