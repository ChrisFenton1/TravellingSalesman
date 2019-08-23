import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import DateTimePicker from 'react-datetime-picker';

import * as addressActions from "../../redux/actions/addressActions";

class AddressPage extends React.Component {
  state = {
    address: {
      id: "",
      address: "",
      streetAddress: "",
      addressLine2: "",
      city: "",
      state: "VIC",
      zip: "",
      country: "",
      fromDate: new Date(),
      toDate: new Date()
    }
  };

  constructor(props) {
    super(props);
  }

  handleChange = event => {
    const address = {
      ...this.state.address,
      [event.target.name]: event.target.value
    };
    this.setState({ address });
  };

  handleChangeFromDate = date => {
    const address = {
      ...this.state.address,
      fromDate: date
    };
    this.setState({ address });
  };

  handleSubmit = event => {
    event.preventDefault();
    const address = {
      ...this.state.address,
      id: create_UUID(),
      username: this.getCookie("username")
    };

    this.props.actions.addAddress(address);
  };

  removeAddress = id => event => {
    event.preventDefault();

    this.props.actions.removeAddress(id);
  };

  clearAddresses = event => {
    event.preventDefault();
    this.props.actions.removeAllAddresses();
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
        <h3>Add Address</h3>
        <div className="form-group">
          <button onClick={this.clearAddresses} className="btn btn-danger">
            Clear
          </button>
        </div>

        <div className="form-group">
          <label>Address</label>
          <input
            className="form-control"
            type="text"
            name="address"
            onChange={this.handleChange}
            value={this.state.address.address}
          />
        </div>

        <div className="form-group">
          <label>Street Address</label>
          <input
            className="form-control"
            type="text"
            name="streetAddress"
            onChange={this.handleChange}
            value={this.state.address.streetAddress}
          />
        </div>

        <div className="form-group">
          <label>Address Line 2</label>
          <input
            className="form-control"
            type="text"
            name="addressLine2"
            onChange={this.handleChange}
            value={this.state.address.addressLine2}
          />
        </div>

        <div className="form-group">
          <label>State</label>
          <select
            className="form-control"
            name="state"
            onChange={this.handleChange}
            value={this.state.address.state}
          >
            <option value="VIC">VIC</option>
            <option value="NSW">NSW</option>
            <option value="NSW">SA</option>            
            <option value="NSW">WA</option>
            <option value="NSW">TAS</option>
          </select>
        </div>

        <div className="form-group">
          <label>Post code</label>
          <input
            className="form-control"
            type="text"
            name="zip"
            onChange={this.handleChange}
            value={this.state.address.zip}
          />
        </div>

        <div className="form-group">
          <label>From</label>
          <br/>
          <DateTimePicker
            name="fromdate"
            onChange={this.handleChangeFromDate}
            value={this.state.address.fromDate}
          />
        </div>

        <div className="form-group">
          <label>To</label>
          <br/>
          <DateTimePicker
            name="toDate"
            onChange={this.handleChangeToDate}
            value={this.state.address.toDate}
          />
        </div>


        <input type="submit" value="Save" className="btn btn-primary" />

        <div className="container">
          {this.props.addresses.map(address => (
            <div className="row mt-3" key={address.id}>
              <div className="col-sm">
                {address.id} - {address.address}, {address.streetAddress},{" "}
                {address.addressLine2}, {address.state}, {address.date.toString()}
              </div>
              <div className="col-sm">
                <button
                  onClick={this.removeAddress(address.id)}
                  className="btn btn-info"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </form>
    );
  }
}

AddressPage.propTypes = {
  addresses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    //createCourse: course => dispatch(courseActions.createCourse(course)) //map action 1 by one
    actions: bindActionCreators(addressActions, dispatch) //map all actions
  };
}

function mapStateToProps(state) {
  return { addresses: state.addresses };
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
)(AddressPage);

// export default AddressPage;
