/**
*
* Login
*
*/

import React from 'react';

import styles from './styles.css';
// import validator from 'email-validator';
import TextInput from '../TextInput';

class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    login: React.PropTypes.func.isRequired,
    cancelLogin: React.PropTypes.func.isRequired,
  };

  state = {};

  login = () => {
    const username = this.usernameField.value();
    const password = this.passwordField.value;

    // if (!validator.validate(email)) {
    //   this.setState({
    //     errorText: 'Please provide a valid email',
    //   });
    //   return;
    // }

    // TODO: validation

    this.setState({
      errorText: null,
    });

    this.props.login(username, password);
  }

  render() {
    return (
      <div className={styles.login}>
        <div
          className={styles.heading}
        >
          Login with your email
        </div>

        <TextInput
          placeholder="Your username"
          ref={(f) => { this.usernameField = f; }}
          errorText={this.state.errorText}
        />

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            required
            ref={(f) => { this.passwordField = f; }}
          />
        </div>

        <div
          className={styles.actionContainer}
        >
          <div
            className={styles.button}
            onClick={this.props.cancelLogin}
          >
            cancel
          </div>
          <div
            className={styles.button}
            onClick={this.login}
          >
            log in
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
