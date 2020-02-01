export const fetchUserData = (searchText) => {
    return {
        type: 'FETCH_USER_DATA',
        searchText
    };
}

export const fetchReposData = (searchText) => {
    return {
        type: 'FETCH_REPO_DATA',
        searchText
    };
}