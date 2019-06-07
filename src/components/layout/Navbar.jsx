import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import gitHubLogo from "../../git-logo.png";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userFromInput: ""
    };
  }

  searchUser = event => {
    event.preventDefault();
    this.props.search(this.state.userFromInput);
    this.setState({ userFromInput: "" });
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Fragment>
        <div className="nav-search ">
          <img src={gitHubLogo} alt="Github logo" className="logo" />
          <div className="nav-search-bar">
            <h1>{this.props.title}</h1>
            <div>
              <input
                type="text"
                name="userFromInput"
                placeholder="Search Users..."
                value={this.state.userFromInput}
                onChange={this.onChange}
              />
              <button onClick={this.searchUser}>Search</button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

Navbar.defaultProps = {
  title: "Github profiles searcher"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired
};

export default Navbar;
