  export const INITIAL_STATE = {
    modalMyAccount: false,
    modalNewVideo: false,
  };
  
  export default function modalManagerReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "SET_MODAL": 
        return {
          ...state,
          modalMyAccount: action.modalMyAccount,
          modalNewVideo: action.modalNewVideo
        }
      default:
        return state;
    }
  }