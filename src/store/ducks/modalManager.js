  export const INITIAL_STATE = {
    modalMyAccount: false,    
  };
  
  export default function modalManagerReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "SET_MODAL_MY_ACCOUNT": 
        return {
          ...state,
          modalMyAccount: action.modalMyAccount
        }
      default:
        return state;
    }
  }