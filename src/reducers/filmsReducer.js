const initialState = {
    filmsList: [],
    isLoading: true,
    error: false,
    filmInfo: {
        title: ''
    },
};

export const filmsReducer = (state = initialState, actions) => {
    switch (actions.type) {

        case "GET_FILMS_LIST_STARTED":
            return {
                ...state,
                isLoading: true,
                error: false,
            };

        case "GET_FILMS_LIST_SUCCESS":
            return {
                ...state,
                filmsList: actions.payload,
                isLoading: false,
                error: false,
            };

        case "GET_FILMS_LIST_FAILURE":
            return {
                ...state,
                isLoading: false,
                error: actions.payload,
            };



        case "GET_FILM_INFO_STARTED":
            return {
                ...state,
                isLoading: true,
                error: false,
            };

        case "GET_FILM_INFO_SUCCESS":
            return {
                ...state,
                filmInfo: actions.payload,
                isLoading: false,
                error: false,
            };

        case "GET_FILM_INFO_FAILURE":
            return {
                ...state,
                isLoading: false,
                error: actions.payload,
            };

        default:
            return state;
    }
};

export default filmsReducer;