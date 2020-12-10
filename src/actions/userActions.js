import actions from "../constants/actionsType";

const setUserAction = data => ({
    type: actions.SET_USER_INFO,
    payload: data,
});

const setLoadingFalseAction = () => ({
    type: actions.SET_LOADING_FALSE,
});

const allUserActions = {
    setUserAction,
    setLoadingFalseAction,
};

export default  allUserActions;