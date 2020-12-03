const INITIAL_STATE = {
    search: ""
  };
  
  export default function searchReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'SET_SEARCH': 
        return {
          ...state,
          search: action.search
        };
      default:
        return state;
    }
  }