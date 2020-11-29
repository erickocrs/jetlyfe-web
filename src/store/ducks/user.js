const INITIAL_STATE = {
    user: {},    
    token: null
  };
  
  export default function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'SET_USER': 
        return {
          ...state,
          user: action.user,
          token: action.token
        };
      case "SET_CURRENT_TOKEN": 
        return {
          ...state,
          token: action.token
        }
      default:
        return state;
    }
  }