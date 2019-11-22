import expect from 'expect';
import headerContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('headerContainerReducer', () => {
  it('returns the initial state', () => {
    expect(headerContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
