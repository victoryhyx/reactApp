import React from "react";

export default class timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }
  tick() {
    this.setState((state) => ({
      seconds: state.seconds + 1,
    }));
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.tick();
    }, 1000);
  }
  render() {
    return (
      <div>
        seconds:{this.state.seconds}name: {this.props.name}
      </div>
    );
  }
}
