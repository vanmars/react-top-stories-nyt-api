import * as c from './../actions/ActionTypes';

let initialState = {
  isLoading: false,
  headlines: [],
  error: null
}

export default (state=initialState, action) => {
  switch(action.type) {
    case c.REQUEST_HEADLINES:
      // Code
    default:
      return state;
  }
}
