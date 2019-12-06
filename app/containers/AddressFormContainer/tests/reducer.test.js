import expect from 'expect';
import addressFormContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('addressFormContainerReducer', () => {
  it('returns the initial state', () => {
    expect(addressFormContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
