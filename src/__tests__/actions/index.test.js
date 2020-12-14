import * as a from './../../actions/index';
import * as c from './../../actions/ActionTypes'

describe('headline reducer actions', () => {

it('requestHeadlines should create REQUEST_HEADLINES action', () => {
    expect(a.requestHeadlines()).toEqual({
      type: c.REQUEST_HEADLINES
    })
  })

it('getHeadlinesFailure es should create GET_HEADLINES_FAILURE', () => {
    const error = 'An error message';
    expect(a.getHeadlinesFailure(error)).toEqual({
      type: c.GET_HEADLINES_FAILURE,
      error: 'An error message'
    })
   
  })

it('getHeadlinesSuccess should create GET_HEADLINES_SUCCESS action', () => {
    const headline = 'A headline';
    expect(a.getHeadlinesSuccess(headline)).toEqual({
      type: c.GET_HEADLINES_SUCCESS,
      headlines: 'A headline'
    })
  })
})