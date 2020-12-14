import * as c from './ActionTypes';

export const requestHeadlines = () => ({
  type: c.REQUEST_HEADLINES
})

export const getHeadlinesFailure = (error) => ({
  type: c.GET_HEADLINES_FAILURE,
  error
})

export const getHeadlinesSuccess = (headlines) => ({
  type: c.GET_HEADLINES_SUCCESS,
  headlines
})

export const makeApiCall = () => {
  return dispatch => {
    dispatch(requestHeadlines);
    return fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.NYT_API_KEY}`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getHeadlinesSuccess(jsonifiedResponse.results));
        })
      .catch((error) => {
        dispatch(getHeadlinesFailure(error));
      });
  }
}