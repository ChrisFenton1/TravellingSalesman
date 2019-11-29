import { createSelector } from 'reselect';
/**
 * Direct selector to the registerContainer state domain
 */
const selectRegisterContainerDomain = () => state => state.get('registerContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by RegisterContainer
 */

const selectRegisterContainer = () => createSelector(
  selectRegisterContainerDomain(),
  (substate) => (substate ? substate.toJS() : {})
);

export default selectRegisterContainer;
export {
  selectRegisterContainerDomain,
};
