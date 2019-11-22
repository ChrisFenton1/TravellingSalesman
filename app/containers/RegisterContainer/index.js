/*
 *
 * RegisterContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectRegisterContainer from './selectors';
import styles from './styles.css';
import Register from '../../components/Register';
import * as registerActions from './actions';

export class RegisterContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.registerContainer}>
        <Helmet
          title="RegisterContainer"
          meta={[
            { name: 'description', content: 'Description of RegisterContainer' },
          ]}
        />
        test
        <Register {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = selectRegisterContainer();

function mapDispatchToProps(dispatch) {
  return {
    register: (user) => dispatch(registerActions.register(user)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
