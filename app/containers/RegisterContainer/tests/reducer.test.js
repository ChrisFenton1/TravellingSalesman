import expect from 'expect';
import registerContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('registerContainerReducer', () => {
  it('returns the initial state', () => {
    expect(registerContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
