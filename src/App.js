import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/layout/SearchBar";
import Profiles from "./components/layout/Profiles";
import Axios from "axios";
import Loader from "react-loader-spinner";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      dataFromApi: [],
      error: {}
    };
  }

  searchUsers = async userName => {
    this.setState({ loading: true });
    const res = await Axios.get(
      `https://api.github.com/search/users?q=${userName}&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    console.log(res.data.items);
    this.setState({ dataFromApi: res.data.items, loading: false });
  };

  render() {
    return (
      <div className="App">
        <SearchBar search={this.searchUsers} />
        {this.state.loading ? (
          <div className="loader">
            <Loader type="ThreeDots" color="#282c34" height="200" width="200" />
          </div>
        ) : (
          <Profiles users={this.state.dataFromApi} />
        )}
      </div>
    );
  }
}

export default App;
