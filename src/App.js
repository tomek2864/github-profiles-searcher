import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";

class App extends Component {
  searchUsers = userName => {
    console.log(userName);
  };
  render() {
    return (
      <div className="App">
        <Navbar search={this.searchUsers} />
      </div>
    );
  }
}

export default App;
