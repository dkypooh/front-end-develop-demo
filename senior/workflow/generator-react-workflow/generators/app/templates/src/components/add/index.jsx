import React from "react";
import event from '../../common/event';

export default class extends React.PureComponent {
  handleAdd() {
    event.emit('add');
  }

  handleReduce() {
    event.emit('reduce');
  }
  render() {
    return (
      <div className="m-opt">
        <div onClick={() => {this.handleAdd()}}>+</div>
        <div onClick={() => {this.handleReduce()}}>-</div>
      </div>
    );
  }
}
