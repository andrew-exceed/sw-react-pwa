import actions from "../constants/actionsType";
import allFilmsServises from '../api/filmsServices'

const getFilmsListAction = () => {
    return async dispatch => {
        dispatch(getFilmsListStarted());
        try{
            const resp = await allFilmsServises.getFilmsService();
            dispatch(getFilmsListSuccess(resp.data.results));
        } catch (err){
            dispatch(getFilmsListFailure(err));
        }
    }
}
const getFilmsListStarted = () => ({
    type: actions.GET_FILMS_LIST_STARTED
});
const getFilmsListSuccess = data => ({
    type: actions.GET_FILMS_LIST_SUCCESS,
    payload: data
});
const getFilmsListFailure = error => ({
    type: actions.GET_FILMS_LIST_FAILURE,
    payload: error,
});


const getFilmInfoAction = (planetId) => {
    return async dispatch => {
        dispatch(getFilmInfoStarted());
        try{
            const resp = await allFilmsServises.getFilmsService(planetId);
            dispatch(getFilmInfoSuccess(resp.data));
        } catch (err){
            dispatch(getFilmInfoFailure(err));
        }
    }
}
const getFilmInfoStarted = () => ({
    type: actions.GET_FILM_INFO_STARTED
});
const getFilmInfoSuccess = data => ({
    type: actions.GET_FILM_INFO_SUCCESS,
    payload: data
});
const getFilmInfoFailure = error => ({
    type: actions.GET_FILM_INFO_FAILURE,
    payload: error,
});

const allFilmsActions = {
    getFilmsListAction,
    getFilmInfoAction,
};

export default  allFilmsActions;