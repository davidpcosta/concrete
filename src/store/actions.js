export const fetchUserData = (searchText) => {
    return (dispatch, getState, { api }) => {
        console.log("Fetching user '" + searchText + "'...");
        api.get('/users/' + searchText)
            .then(res => {
                console.log(searchText);
                console.log(res.data);
                dispatch({ type: 'FETCH_USER', user: res.data });
            })
            .catch((err) => {
                dispatch({ type: 'FETCH_USER_ERROR', error: err });
            });
    }
}

export const fetchReposData = (searchText) => {
    return (dispatch, getState, { api }) => {
        console.log("Fetching user '" + searchText + "' repos...");
        api.get('/users/' + searchText + '/repos')
            .then(res => {
                console.log(searchText);
                console.log(res.data);
                dispatch({ type: 'FETCH_REPOS', repos: res.data });
            })
            .catch((err) => {
                console.log(err);
            });
    }
}