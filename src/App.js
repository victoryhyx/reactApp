import React, { Component } from "react";
// import { Router } from 'react-router';
import HelloMessage from "./components/testComponents";
import Timer from "./components/timer";
import Todo from "./components/todo";
// import MakerDownEdit from "./components/makerdowneditor";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloMessage name="Taylor" />,
        <Timer name={"张三"} />
        <Todo />
        {/* <MakerDownEdit /> */}
      </div>
    );
  }
}

export default App;
