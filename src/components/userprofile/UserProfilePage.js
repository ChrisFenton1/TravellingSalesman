import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";

import * as userProfileActions from "../../redux/actions/userProfileActions";

class UserProfilePage extends React.Component {
  state = {
    user: {
      firstname: "",
      lastname: ""
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
    this.props.actions.addProfileUser(user);
    //this.setState({ toAddress: true });
  };

  getCookie = function(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Welcome {this.getCookie("username")} !!!!</h3>

        <div className="form-group">
          <label>First Name</label>
          <input
            className="form-control"
            type="text"
            name="firstname"
            required
            onChange={this.handleChange}
            value={this.state.user.firstname}
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            className="form-control"
            type="text"
            name="lastname"
            required
            onChange={this.handleChange}
            value={this.state.user.lastname}
          />
        </div>

        <div className="form-group">
          <label>Home Address</label>
          <input
            className="form-control"
            type="text"
            name="homeaddress"
            required
            onChange={this.handleChange}
            value={this.state.user.homeaddress}
          />
        </div>
        <input type="submit" value="Save" className="btn btn-primary" />
        <div className="container">
          {this.props.userProfile.map(user => (
            <div className="row mt-3" key={user.firstname}>
              <div className="col-sm-3">{user.firstname}</div>
              <div className="col-sm-3">{user.lastname}</div>
              <div className="col-sm-3">{user.homeaddress}</div>
            </div>
          ))}
        </div>
      </form>
    );
  }
}

UserProfilePage.propTypes = {
  userProfile: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    //createCourse: course => dispatch(courseActions.createCourse(course)) //map action 1 by one
    actions: bindActionCreators(userProfileActions, dispatch) //map all actions
  };
}

function mapStateToProps(state) {
  return { userProfile: state.user };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfilePage);

// export default AddressPage;
