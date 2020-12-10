const initialState = {
    userInfo:{
        email: "",
        password: "",
        isAuth: false,
    },
    isLoading: true,
};

export const userReducer = (state = initialState, actions) => {
    switch (actions.type) {

        case "SET_USER_INFO":
            return {
                ...state,
                userInfo: actions.payload,
                isLoading: false,
            };

        case "SET_LOADING_FALSE":
            return {
                ...state,
                isLoading: false,
            };
            
        default:
            return state;
    }
};

export default userReducer;