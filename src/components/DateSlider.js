import React from "react";
import { CircleSlider } from "react-circle-slider";
import { gsap, TweenMax, Linear } from "gsap";
import DateText from "./DateText";

import "./DateSlider.css";

class DateSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentDateIndex: 0 };
  }

  componentDidMount() {
    window.document.addEventListener("mousedown", this.stopAnimation);

    let tween = {
      value: 0
    };

    TweenMax.to(tween, 15, {
      value: this.props.dates.length - 1,
      onUpdate: () => this.changeDate(Math.floor(tween.value)),
      delay: 1,
      ease: Linear.easeNone
    });
  }

  stopAnimation = () => {
    gsap.globalTimeline.pause();
  };

  changeDate = dateIndex => {
    this.setState({ currentDateIndex: dateIndex });
    this.props.updateDate(this.props.dates[dateIndex]);
  };

  render() {
    const value = this.state.currentDateIndex;

    return (
      <div className="date-slider">
        <CircleSlider
          value={value}
          size={200}
          progressColor="red"
          onChange={this.changeDate}
          max={this.props.dates.length - 1}
        />
        <DateText currentDate={this.props.dates[value]} />
      </div>
    );
  }
}

export default DateSlider;
