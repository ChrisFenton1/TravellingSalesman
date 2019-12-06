/**
*
* AddressForm
*
*/

import React from 'react';
// import DateTimePicker from 'react-datetime-picker';

import styles from './styles.css';

class AddressForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    add: React.PropTypes.func.isRequired,
  };

  handleSave = () => {
    // if (!validator.validate(email)) {
    //   this.setState({
    //     errorText: 'Please provide a valid email',
    //   });
    //   return;
    // }

    // TODO: validation

    // this.setState({
    //   errorText: null,
    // });

    this.props.add({
      address: this.address.value,
      streetAdress: this.streetAddress.value,
    });
  }

  render() {
    return (
      <div className={styles.addressForm}>
        {/* <h3>{this.state.address.id === '' ? 'Add Address' : 'Edit Address'}</h3> */}
        <div className="form-group">
          <button onClick={this.clearAddresses} className="btn btn-danger">
            Clear
          </button>
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            className="form-control"
            type="text"
            name="address"
            ref={(f) => { this.address = f; }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="streetAddress">Street Address</label>
          <input
            className="form-control"
            type="text"
            name="streetAddress"
            ref={(f) => { this.streetAddress = f; }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="addressLine2">Address Line 2</label>
          <input
            className="form-control"
            type="text"
            name="addressLine2"
            ref={(f) => { this.addressLine2 = f; }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="state">State</label>
          <select
            className="form-control"
            name="state"
            ref={(f) => { this.state = f; }}
          >
            <option value="VIC">VIC</option>
            <option value="NSW">NSW</option>
            <option value="NSW">SA</option>
            <option value="NSW">WA</option>
            <option value="NSW">TAS</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="zip">Post code</label>
          <input
            className="form-control"
            type="text"
            name="zip"
            ref={(f) => { this.zip = f; }}
          />
        </div>

        {/* <div className="form-group">
          <label htmlFor="fromDate">From</label>
          <br />
          <DateTimePicker
            name="fromDate"
            ref={(f) => { this.fromdate = f; }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="streetAddress">To</label>
          <br />
          <DateTimePicker
            name="toDate"
            ref={(f) => { this.toDate = f; }}
          />
        </div> */}

        <input type="button" value="Save" className="btn btn-primary" onClick={this.handleSave} />

      </div>
    );
  }
}

export default AddressForm;
