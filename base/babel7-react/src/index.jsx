import React from "react";
import Add from './components/add';
import ShowLayer from './components/show';

export default class extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Add />
        <ShowLayer />
      </div>
    );
  }
}
