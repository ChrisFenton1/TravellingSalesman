/*
 *
 * HeaderContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectHeaderContainer from './selectors';
import styles from './styles.css'
import Header from '../../components/common/Header'

export class HeaderContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.headerContainer}>
          <Header />
      </div>
    );
  }
}

const mapStateToProps = selectHeaderContainer();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
