const FETCH_USER = "FETCH_USER";
const FETCH_REPOS = "FETCH_REPOS";
const FETCH_USER_ERROR = 'FETCH_USER_ERROR';

const iniState = {
    user: {},
    repos: []
}

function reducers(state = iniState, action) {

  switch (action.type) {
    case FETCH_USER:
      return {
          ...state,
          user: {
              ...action.user
            }
      };

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