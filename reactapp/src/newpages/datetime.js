import React, { Component } from "react";
import DatePicker from "react-datepicker";
import './datepick.css'

class DateTimePick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  handleChange = (date) => {
    this.setState({ date });
  };

  render() {
    return (
      <div>
        <DatePicker
          value={this.state.date}
          onChange={this.handleChange}
          className="datepick"
        />
      </div>
    );
  }
}

export default DateTimePick;