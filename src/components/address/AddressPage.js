import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import DateTimePicker from 'react-datetime-picker';
import { Redirect, Route } from "react-router";

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
    },
    editSuccess :false
  };

  constructor(props) {
    super(props);
    
  }

  componentDidMount () {
    
    if(this.props.match == null || this.props.match.params == null)
      return;

    //const { match: { params } } = this.props; //???
    var params = this.props.match.params;

    var foundAddress = this.props.addresses.find(function(element) {
      return element.id == params.addressId;
    });

    if(foundAddress != null)
    {
      const address = {
        ...foundAddress
      };

      address.fromDate = new Date(address.fromDate);
      address.toDate = new Date(address.toDate);

      this.setState({ address });

      console.log(address);
    }
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

    console.log(address);

    this.setState({ address });
  };

  handleChangeToDate = date => {
    const address = {
      ...this.state.address,
      toDate: date
    };
    this.setState({ address });
  };

  validateDates = (addressObject) => {        
    const foundAddress = this.props.addresses.filter(
      x => x.username == this.state.address.username && 
      (((this.formatDate(x.fromDate) <= this.formatDate(addressObject.fromDate)) && (this.formatDate(x.toDate) >= this.formatDate(addressObject.fromDate))) ||
      ((this.formatDate(x.fromDate) <= this.formatDate(addressObject.toDate)) && (this.formatDate(x.toDate) >= this.formatDate(addressObject.toDate))) )
    );

    console.log(foundAddress);
    if(foundAddress.length > 0){
      alert('There are overlapping address data for this user. Cannot change!!');
      return false;
    }
    return true;
  }

  handleSubmit = event => {
    event.preventDefault();
    if(this.state.address.id != "") //edit
    {
      const address = {
        ...this.state.address
        //username: this.getCookie("username")
      };

      if(this.validateDates(address)){
        this.props.actions.editAddress(address);
        this.setState({editSuccess : true});
      }
      //<Redirect to={"/calender/" + this.state.addressId} />;      
    }
    else{ //new 
      const address = {
        ...this.state.address,
        id: create_UUID(),
        username: this.getCookie("username")
      };
      if(this.validateDates(address)){
        this.props.actions.addAddress(address);
      }
    }    
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
  formatDate = (dateObject) => {
    return new Date(dateObject).toLocaleString('en-US');
  }

  render() {    

    if(this.state.editSuccess)
    {
      return <Redirect to={"/calender"} />;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>{this.state.address.id == "" ? 'Add Address' : 'Edit Address'}</h3>
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

        <div className="form-group">
          <label>User:&nbsp;</label>
          <span>{this.state.address.username}</span>
        </div>


        <input type="submit" value="Save" className="btn btn-primary" />

        <div className="container">
          {this.props.addresses.map(address => (
            <div className="row mt-3" key={address.id}>
              <div className="col-sm">
                {address.id} - {address.address}, {address.streetAddress},{" "}
                {address.addressLine2}, {address.state}, 
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
