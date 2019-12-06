import { createSelector } from 'reselect';

/**
 * Direct selector to the addressFormContainer state domain
 */
const selectAddressFormContainerDomain = () => state => state.get('addressFormContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AddressFormContainer
 */

const selectAddressFormContainer = () => createSelector(
  selectAddressFormContainerDomain(),
  (substate) => (substate ? substate.toJS() : {})
);

export default selectAddressFormContainer;
export {
  selectAddressFormContainerDomain,
};
