import React from "react";
import ReactDOM from "react-dom";
import { observable, action } from "mobx";
import { Provider, observer, inject } from "mobx-react";

import "./styles.css";

class Store {
  @observable count = 0;

  @action inc = (n = 1) => (this.count += n);
}

@inject("store")
@observer
class App extends React.Component {
  render() {
    const { store } = this.props;

    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <p onClick={() => store.inc()}>{store.count}</p>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={new Store()}>
    <div>
      <App />
    </div>
  </Provider>,
  rootElement
);
