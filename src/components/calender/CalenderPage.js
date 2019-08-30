import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";

//1. import
import { PropTypes } from "prop-types";
import Scheduler, {
  SchedulerData,
  ViewTypes,
  DATE_FORMAT
} from "react-big-scheduler";
//include `react-big-scheduler/lib/css/style.css` for styles, link it in html or import it here
import "react-big-scheduler/lib/css/style.css";
import moment from "moment";
import withDragDropContext from "./withDnDContext";

class CalenderPage extends React.Component {
  state = {
    viewModel: null,
    addressId: null
  };

  constructor(props) {
    super(props);

    let schedulerData = new SchedulerData(
      new Date(),
      ViewTypes.Week,
      false,
      false,
      {
        startResizable: false,
        endResizable: false,
        movable: false,
        creatable: false
      }
    );

    schedulerData.localeMoment.locale("en");
    
    this.setData(schedulerData);

    this.state = {
      viewModel: schedulerData
    };
  }

  setData = (schedulerData) => 
  {
    let resources = [];
    for (let index = 0; index < this.props.register.length; index++) {
      resources.push({
        id: this.props.register[index].username,
        name: this.props.register[index].username
      });
      
    }
    
    schedulerData.setResources(resources);

    let events = [];
    for (let i = 0; i < this.props.addresses.length; i++) {

      for (let j = 0; j < this.props.register.length; j++) {
        
        var userAddress = this.props.addresses[i];
        let register = this.props.register[j];
        if(userAddress.username == register.username)        
        {
          console.log(userAddress.address);

          events.push({
            id: userAddress.id,
            start: this.formatDate(userAddress.fromDate), //2019-08-17T04:49:44.144Z to "2017-12-18 09:30:00",
            end: this.formatDate(userAddress.toDate),
            resourceId: userAddress.username,
            title: userAddress.address
            //resizable: false,
            //movable: false
          });
        }
      }
    }
    schedulerData.setEvents(events);
  }

  formatDate = (dateObject) => {
    return dateObject.toLocaleString();
  }

  nextClick = (schedulerData)=> {
    schedulerData.next();
    this.setData(schedulerData);
    this.setState({
        viewModel: schedulerData
    });    
  }

  prevClick = (schedulerData)=> {
    schedulerData.prev();
    this.setData(schedulerData);
    this.setState({
        viewModel: schedulerData
    });  
  }

  onViewChange = (schedulerData, view) => {
    schedulerData.setViewType(view.viewType, view.showAgenda, view.isEventPerspective);
    schedulerData.config.creatable = !view.isEventPerspective;
    this.setData(schedulerData);
    this.setState({
        viewModel: schedulerData
    })
  }

  eventClicked = (schedulerData, event) => {
    var addressId = event.id;
    
    this.setState({
      addressId: addressId
    });  
  };

  render() {
    let schedulerData = this.state.viewModel;

    if(this.state.addressId != null)
    {
      return <Redirect to={"/editAddress/" + this.state.addressId} />;
    }

    return (
      <div>
        <div>
          <Scheduler
            schedulerData={schedulerData}
            prevClick={this.prevClick}
            nextClick={this.nextClick}
            onSelectDate={this.onSelectDate}
            onViewChange={this.onViewChange}
            eventItemClick={this.eventClicked}
          />
        </div>
      </div>
    );
  }
}

CalenderPage.propTypes = {
  addresses: PropTypes.array.isRequired,
  register: PropTypes.array.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    //createCourse: course => dispatch(courseActions.createCourse(course)) //map action 1 by one
    //actions: bindActionCreators(addressActions, dispatch) //map all actions
  };
}

function mapStateToProps(state) {
  return {
     addresses: state.addresses,
     register: state.register
    };
}

//export default ;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withDragDropContext(CalenderPage));