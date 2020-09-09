import React from "react";
import { CircleSlider } from "react-circle-slider";

import "./DateSlider.css";

class DateSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentDate: 0 };
    console.log("PROPS", props);
  }

  changeDate = date => {
    this.setState({ currentDate: date });
    this.props.updateDate(this.props.dates[date]);
  };

  render() {
    const value = this.state.currentDate;
    return (
      <div className="date-slider">
        <CircleSlider value={value} onChange={this.changeDate} />
        {this.props.dates[value]}
      </div>
    );
  }
}

export default DateSlider;
