import { createSelector } from 'reselect';
import selectRegisterContainer from '../RegisterContainer/selectors';

/**
 * Direct selector to the loginContainer state domain
 */
const selectLoginContainerDomain = () => state => state.get('loginContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LoginContainer
 */

const selectLoginContainer = () => createSelector(
  selectLoginContainerDomain(),
  selectRegisterContainer(),
  (substate, registerSubstate) => Object.assign(substate ? substate.toJS() : {}, registerSubstate)
);

export default selectLoginContainer;
export {
  selectLoginContainerDomain,
};
