import React from "react";
import event from '../../common/event';

export default class extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    }

    event.on('reduce', () => {
      this.setState({
        number: this.state.number - 1
      })
    });

    event.on('add', () => {
      this.setState({
        number: this.state.number + 1
      })
    });
  }
  render() {
    return (
      <div className="m-show">
        {this.state.number}
      </div>
    );
  }
}
