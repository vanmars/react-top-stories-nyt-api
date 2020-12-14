import headlinesReducer from './../../reducers/headlines-reducer'
import * as c from './../../actions/ActionTypes'

describe ('headlinesReducer', () => {
  let defaultState = {
    isLoading: false,
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

  it('given action type of request headlines, changes state to isLoading true', () => {
    expect(headlinesReducer(defaultState, {type: c.REQUEST_HEADLINES})).toEqual({
      isLoading: true,
      headlines: [],
      error: null
    })
  })
})