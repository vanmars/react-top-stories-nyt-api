import headlinesReducer from './../../reducers/headlines-reducer'

describe ('headlinesReducer', () => {
  let initialState = {
    isLoading: false,
    headlines: [],
    error: null
  }

  it('returns default state given an action type of null', () => {
    expect(headlinesReducer(initialState, {type: null})).toEqual({
      isLoading: false,
      headlines: [],
      error: null
    })
  })
})