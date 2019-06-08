import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/layout/SearchBar";
import Profiles from "./components/layout/Profiles";
import Axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFromApi: []
    };
  }

  searchUsers = async userName => {
    const res = await Axios.get(
      `https://api.github.com/search/users?q=${userName}&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    console.log(res.data.items);
    this.setState({ dataFromApi: res.data.items });
  };

  render() {
    return (
      <div className="App">
        <SearchBar search={this.searchUsers} />
        <Profiles users={this.state.dataFromApi} />
      </div>
    );
  }
}

export default App;
