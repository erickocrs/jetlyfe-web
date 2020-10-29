const INITIAL_STATE = {
    currentVideoPlaying: null,    
    currentVideoListPlaying: null
  };
  
  export default function videoReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "SET_VIDEO_PLAYING": 
        return {
          ...state,
          videoPlaying: action.videoPlaying
        }
      case 'SET_VIDEO_LIST_PLAYING': 
        return {
          ...state,
          stepEmployeePassword: action.step
        };
      default:
        return state;
    }
  }