import React from "react";
import { connect } from "react-redux";

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
    address: {
      id: "",
      address: "",
      streetAddress: "",
      addressLine2: "",
      city: "",
      state: "VIC",
      zip: "",
      country: ""
    }
  };

  contructor() {
    this.addressStateRef = React.createRef();
  }

  render() {
    let schedulerData = new SchedulerData(
      "2017-12-18",
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
    let resources = [
      {
        id: "r1",
        name: "Mike"
      },
      {
        id: "r2",
        name: "Sathya"
      },
      {
        id: "r3",
        name: "Omkar"
      }
    ];
    schedulerData.setResources(resources);

    let events = [
      {
        id: 1,
        start: "2017-12-18 09:30:00",
        end: "2017-12-19 23:30:00",
        resourceId: "r1",
        title: "I am finished",
        bgColor: "#D9D9D9"
      },
      {
        id: 2,
        start: "2017-12-18 12:30:00",
        end: "2017-12-18 23:30:00",
        resourceId: "r1",
        title: "I am not resizable",
        resizable: false
      },
      {
        id: 3,
        start: "2017-12-19 12:30:00",
        end: "2017-12-20 23:30:00",
        resourceId: "r3",
        title: "I am not movable",
        movable: false
      },
      {
        id: 4,
        start: "2017-12-19 14:30:00",
        end: "2017-12-20 23:30:00",
        resourceId: "r1",
        title: "I am not start-resizable",
        startResizable: false
      },
      {
        id: 5,
        start: "2017-12-19 15:30:00",
        end: "2017-12-20 23:30:00",
        resourceId: "r2",
        title: "R2 has recurring tasks every week on Tuesday, Friday",
        rrule: "FREQ=WEEKLY;DTSTART=20171219T013000Z;BYDAY=TU,FR",
        bgColor: "#f759ab"
      }
    ];
    schedulerData.setEvents(events);

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

export default withDragDropContext(CalenderPage);
