/*
 *
 * About
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styles from './styles.css';

export class About extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.about}>
        <Helmet
          title="About"
          meta={[
          { name: 'description', content: 'Description of About' },
          ]}
        />
        <p>This app uses React, Redux, React Router, and many other helpful
        libraries.</p>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapDispatchToProps)(About);
