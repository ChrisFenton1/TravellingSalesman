/*
 *
 * AddressFormContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectAddressFormContainer from './selectors';
import styles from './styles.css';
import AddressForm from '../../components/AddressForm';
import * as actions from './actions';

export class AddressFormContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.addressFormContainer}>
        <AddressForm {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = selectAddressFormContainer();

function mapDispatchToProps(dispatch) {
  return {
    add: (address) => dispatch(actions.add(address)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressFormContainer);
