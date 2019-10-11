import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";
import DateTimePicker from "react-datetime-picker";
import * as userProfileActions from "../../redux/actions/userProfileActions";
import ToggleDisplay from "react-toggle-display";

class UserProfilePage extends React.Component {
  state = {
    user: {
      id: "",
      firstname: "",
      lastname: "",
      homeaddress: "",
      mobilenumber: "",
      dateofbirth: new Date()
    },
    show: false
  };

  constructor(props) {
    super(props);
    this.toggleDiv = this.toggleDiv.bind(this);
  }
  toggleDiv = () => {
    const { show } = this.state.show;
    this.setState({ show: !show });
  };
  handleClick() {
    this.setState({
      show: !this.state.show
    });
  }

  editUser = function(userId) {
    const foundUser = this.props.userProfile.find(({ id }) => id === userId);
    if (foundUser != null) {
      const user = {
        ...foundUser
      };
      this.setState({ user });
    }
  };

  updateUser = function(updatedUser, existingUserId) {
    const foundUser = this.props.userProfile.find(
      ({ id }) => id === existingUserId
    );
    if (foundUser != null) {
      const user = {
        id: existingUserId,
        firstname: updatedUser.firstname,
        lastname: updatedUser.lastname,
        homeaddress: updatedUser.homeaddress,
        mobilenumber: updatedUser.mobilenumber,
        dateofbirth: updatedUser.dateofbirth
      };
      this.props.actions.removeProfileUser(existingUserId);
      this.props.actions.updateProfileUser(user);
    }
  };

  removeUser = function(userId) {
    event.preventDefault();
    this.props.actions.removeProfileUser(userId);
  };

  handleChange = event => {
    const user = {
      ...this.state.user,
      [event.target.name]: event.target.value
    };
    this.setState({ user });
  };

  handleChangeDate = date => {
    const user = {
      ...this.state.user,
      dateofbirth: date
    };
    this.setState({ user });
  };

  handleSubmit = event => {
    event.preventDefault();

    const updatedUser = {
      ...this.state.user,
      [event.target.name]: event.target.value
    };
    var foundUser = this.props.userProfile.find(
      ({ id }) => id === updatedUser.id
    );
    if (foundUser == null) {
      foundUser = this.props.userProfile.find(
        ({ mobilenumber }) => mobilenumber == updatedUser.mobilenumber
      );
    }

    if (foundUser != null) {
      this.updateUser(updatedUser, foundUser.id);
    } else {
      const user = {
        ...this.state.user,
        id: create_UUID()
      };
      console.log(user.id);
      this.props.actions.addProfileUser(user);
    }
    this.setState({
      user: {
        id: "",
        firstname: "",
        lastname: "",
        homeaddress: "",
        mobilenumber: "",
        dateofbirth: new Date()
      }
    });
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
      <div>
        <h3>Welcome {this.getCookie("username")} !!!!</h3>
        {this.props.userProfile.map(user => (
          <div className="row" key={user.firstname}>
            <div className="col-sm-1">{user.firstname}</div>
            <div className="col-sm-2">{user.lastname}</div>
            <div className="col-sm-3">{user.homeaddress}</div>
            <div className="col-sm-2">{user.mobilenumber}</div>
            <div className="col-sm-2">
              <button onClick={() => this.editUser(user.id)}>Edit</button>
            </div>
            <div className="col-sm-2">
              <button onClick={() => this.removeUser(user.id)}>Remove</button>
            </div>
          </div>
        ))}

        <button onClick={() => this.handleClick()}>Add User</button>
        <ToggleDisplay show={this.state.show}>
          <form onSubmit={this.handleSubmit}>
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
            <div className="form-group">
              <label>Mobile Number</label>
              <input
                className="form-control"
                type="text"
                name="mobilenumber"
                required
                onChange={this.handleChange}
                value={this.state.user.mobilenumber}
              />
            </div>
            <div className="form-group">
              <label>Date Of Birth</label>
            </div>
            <div className="form-group">
              <DateTimePicker
                name="dateofbirth"
                onChange={this.handleChangeDate}
                value={this.state.user.dateofbirth}
              />
            </div>
            <input type="submit" value="Save" className="btn btn-primary" />
          </form>
        </ToggleDisplay>
      </div>
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
)(UserProfilePage);

// export default AddressPage;
