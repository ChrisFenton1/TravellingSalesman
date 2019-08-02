import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";

import * as registerActions from "../../redux/actions/registerActions";

class RegisterPage extends React.Component {
  state = {
    user: {
      username: "",
      password: "",
      confirmpassword: ""
    },
    toAddress: false
  };

  contructor() {}

  handleChange = event => {
    const user = {
      ...this.state.user,
      [event.target.name]: event.target.value
    };
    this.setState({ user });
  };

  handleSubmit = event => {
    event.preventDefault();
    const user = {
      ...this.state.user
      // id: create_UUID()
    };

    if (user.password != user.confirmpassword) {
      document
        .getElementsByName("confirmpassword")[0]
        .setCustomValidity("Confirm password does not match");

      document.getElementsByName("confirmpassword")[0].checkValidity();
      return;
    }

    if (this.props.register.find(x => x.username == user.username) != null) {
      document
        .getElementsByName("username")[0]
        .setCustomValidity("Username not available")
        .checkValidity();
      return;
    }

    this.props.actions.addUser(user);
    this.setState({ toAddress: true });
  };

  render() {
    if (this.state.toAddress === true) {
      return <Redirect to="/Address" />;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Register</h3>

        <div className="form-group">
          <label>Username</label>
          <input
            className="form-control"
            type="text"
            name="username"
            required
            onChange={this.handleChange}
            value={this.state.user.username}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            required
            onChange={this.handleChange}
            value={this.state.user.password}
          />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            className="form-control"
            type="password"
            name="confirmpassword"
            required
            onChange={this.handleChange}
            value={this.state.user.confirmpassword}
          />
        </div>

        <input type="submit" value="Save" className="btn btn-primary" />
        <div className="container">
          {this.props.register.map(user => (
            <div className="row mt-3" key={user.username}>
              <div className="col-sm">{user.username}</div>
            </div>
          ))}
        </div>
      </form>
    );
  }
}

RegisterPage.propTypes = {
  register: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    //createCourse: course => dispatch(courseActions.createCourse(course)) //map action 1 by one
    actions: bindActionCreators(registerActions, dispatch) //map all actions
  };
}

function mapStateToProps(state) {
  return { register: state.register };
}

function create_UUID() {
  var dt = new Date().getTime();
  var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
    c
  ) {
    var r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterPage);

// export default AddressPage;
