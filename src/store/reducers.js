const CLEAR_DATA = "CLEAR_DATA";
const FETCH_USER = "FETCH_USER";
const FETCH_REPOS = "FETCH_REPOS";
const SHOW_USER_LOADING = "SHOW_USER_LOADING";
const SHOW_USER_REPOS_LOADING = "SHOW_USER_REPOS_LOADING";
const HIDE_USER_LOADING = "HIDE_USER_LOADING";
const HIDE_USER_REPOS_LOADING = "HIDE_USER_REPOS_LOADING";
const FETCH_USER_ERROR = 'FETCH_USER_ERROR';

const iniState = {
    isFetching: {
      user: false,
      repos: false
    },
    user: {},
    repos: []
}

function reducers(state = iniState, action) {

  switch (action.type) {

    case SHOW_USER_LOADING:
      return {
        ...state,
        isFetching: {
          ...state.isFetching,
          user: true
        }
      };

    case SHOW_USER_REPOS_LOADING:
      return {
        ...state,
        isFetching: {
          ...state.isFetching,
          repos: true
        }
      };

    case HIDE_USER_LOADING:
      return {
        ...state,
        isFetching: {
          ...state.isFetching,
          user: false
        }
      };

    case HIDE_USER_REPOS_LOADING:
      return {
        ...state,
        isFetching: {
          ...state.isFetching,
          repos: false
        }
      };

    case FETCH_USER:
      return {
        ...state,
        user: {
            ...action.user
          }
      };

      case CLEAR_DATA:
      case FETCH_USER_ERROR:
      return {
        ...state,
        user: {},
        repos: []
      };

    case FETCH_REPOS:
      return {
        ...state,
        repos: [
          ...action.repos
        ]
      };
    
    default: 
      return state;
  }
}

export default reducers;