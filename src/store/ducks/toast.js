const INITIAL_STATE = {
    toast: {}
  };
  
  export default function toastReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'SET_TOAST': 
        return {
          ...state,
          toast: action.toast
        };
      default:
        return state;
    }
  }