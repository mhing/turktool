import React, { Component } from "react";
import Header from "./Header.js";
import LabelViewContainer from "../containers/LabelViewContainer.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div id="AppContainer">
        <Header />
        <LabelViewContainer imageUrl={require("../checkmate.jpg")} />
      </div>
    );
  }
}

export default App;
