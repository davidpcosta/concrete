import { wait } from "@testing-library/dom";

export const fetchUserData = (searchText) => {
    return (dispatch, getState, { api }) => {
        console.log("Fetching user '" + searchText + "'...");
        dispatch({ type: 'CLEAR_DATA' });
        dispatch({ type: 'SHOW_USER_LOADING' });
        api.get('/users/' + searchText)
            .then(res => {
                dispatch({ type: 'FETCH_USER', user: res.data });
                dispatch({ type: 'HIDE_USER_LOADING' });
            })
            .catch((err) => {
                dispatch({ type: 'FETCH_USER_ERROR', error: err });
                dispatch({ type: 'HIDE_USER_LOADING' });
            });
    }
}

export const fetchReposData = (searchText) => {
    return (dispatch, getState, { api }) => {
        console.log("Fetching user '" + searchText + "' repos...");
        dispatch({ type: 'SHOW_USER_REPOS_LOADING' });
        api.get('/users/' + searchText + '/repos')
            .then(res => {
                dispatch({ type: 'FETCH_REPOS', repos: res.data });
                dispatch({ type: 'HIDE_USER_REPOS_LOADING' });
            })
            .catch((err) => {
                console.log(err);
                dispatch({ type: 'HIDE_USER_REPOS_LOADING' });
            });
    }
}