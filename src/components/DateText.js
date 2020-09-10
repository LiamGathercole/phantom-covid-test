import React from "react";

import "./DateText.css";

class DateText extends React.Component {
  getDay() {
    const splitDate = this.props.currentDate.split("-");

    return splitDate[2];
  }

  getMonth() {
    const splitDate = this.props.currentDate.split("-");

    const months = [null, "JAN", "FEB", "MAR", "APR", "MAY", "JUN"];

    const monthIndex = Number(splitDate[1]);

    return months[monthIndex];
  }
  render() {
    return (
      <div>
        <h1 className="day">{this.getDay()}</h1>
        <h2 className="month">{this.getMonth()}</h2>
      </div>
    );
  }
}

export default DateText;
