import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

class LoginPage extends React.Component {
  state = {
    toAddress: false,
    user: {
      username: "",
      password: ""
    }
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

    if (
      this.props.register.find(
        x => x.username == user.username && x.password == user.password
      ) != null
    ) {
      this.setState(() => ({ toAddress: true }));
      var username = user.username;
      this.setCookie("username", username, 365);
    } else {
      alert("wrong username or password");
    }
  };

  setCookie = function(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  };

  render() {
    if (this.state.toAddress === true) {
      return <Redirect to="/Address" />;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Login</h3>

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
        <input type="submit" value="Login" className="btn btn-primary" />
      </form>
    );
  }
}

LoginPage.propTypes = {
  register: PropTypes.array.isRequired
  //actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    //createCourse: course => dispatch(courseActions.createCourse(course)) //map action 1 by one
    //actions: bindActionCreators(registerActions, dispatch) //map all actions
  };
}

function mapStateToProps(state) {
  return { register: state.register };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);

// export default AddressPage;
