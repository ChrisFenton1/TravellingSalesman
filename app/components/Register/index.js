/**
*
* Register
*
*/

import React from 'react';

import styles from './styles.css';

class Register extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    register: React.PropTypes.func.isRequired,
  };

  state = {};

  register = () => {
    const username = this.username.value;
    const password = this.password.value;
    const confirmpassword = this.confirmpassword.value;

    if (password !== confirmpassword) {
      this.setState({
        errorText: 'Confirm Password does not match',
      });
      return;
    }

    this.setState({
      errorText: null,
    });

    this.props.register(
      {
        username,
        password,
      });
  }

  render() {
    return (
      <div className={styles.register}>
        <h3>Register</h3>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            className="form-control"
            type="text"
            name="username"
            required
            ref={(f) => { this.username = f; }}
            value={this.state.username}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            required
            ref={(f) => { this.password = f; }}
            // value={this.state.password}
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmpassword">Confirm Password</label>
          <input
            className="form-control"
            type="password"
            name="confirmpassword"
            required
            ref={(f) => { this.confirmpassword = f; }}
            value={this.state.confirmpassword}
          />
          <span className="error">{this.state.errorText}</span>
        </div>

        <input type="button" value="Register" className="btn btn-primary" onClick={this.register} />
      </div>
    );
  }
}

export default Register;
