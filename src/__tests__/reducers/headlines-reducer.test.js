import headlinesReducer from './../../reducers/headlines-reducer'
import * as c from './../../actions/ActionTypes'

describe ('headlinesReducer', () => {
  let defaultState = {
    isLoading: false,
    headlines: [],
    error: null
  }

  let loadingState = {
    isLoading: true,
    headlines: [],
    error: null
  }

it('returns default state given an action type of null', () => {
    expect(headlinesReducer(defaultState, {type: null})).toEqual({
      isLoading: false,
      headlines: [],
      error: null
    })
  })

it('given action type of request headlines, changes isLoading state to true', () => {
    expect(headlinesReducer(defaultState, {type: c.REQUEST_HEADLINES})).toEqual({
      isLoading: true,
      headlines: [],
      error: null
    })
  })

it('given action type of get headlines failure, updates error and isLoading state', () => {
    const action = {
      type: c.GET_HEADLINES_FAILURE,
      error: 'An error'
    }
    expect(headlinesReducer(loadingState, action)).toEqual({
      isLoading: false,
      headlines: [],
      error: 'An error'
    })
  })

  it('given action type of get headlines success, updates headline and isLoading state', () => {
    const action = {
      type: c.GET_HEADLINES_SUCCESS,
      headlines: 'A headline'
    }
    expect(headlinesReducer(loadingState, action)).toEqual({
      isLoading: false,
      headlines: 'A headline',
      error: null
    })
  })
})