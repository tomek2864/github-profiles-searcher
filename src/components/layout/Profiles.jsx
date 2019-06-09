import React, { Fragment, Component } from "react";
import Profile from "./Profile";
import PropTypes from "prop-types";
import ModalWindow from "../modalWindow/ModalWindow";
import Axios from "axios";
import Loader from "react-loader-spinner";

class Profiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalWindowOpen: false,
      userFromApi: {},
      loading: false,
      errors: {}
    };
  }

  openModalWindow = async userName => {
    this.setState({ loading: true });
    const res = await Axios.get(
      `https://api.github.com/users/${userName.login}?client_id=${
      process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ isModalWindowOpen: true, user: res.data, loading: false });
  };

  closeModalWindow = () => {
    this.setState({ isModalWindowOpen: false, user: {} });
  };

  render() {
    const { users } = this.props;

    return (
      <Fragment>
        {this.state.loading &&
          <div className="loader">
            <Loader type="ThreeDots" color="#282c34" height="200" width="200" />
          </div>
        }
        {this.state.isModalWindowOpen &&
          <ModalWindow
            user={this.state.user}
            closeWindow={this.closeModalWindow}
          />
        }
        <div className="profiles-paper">
          {users.map(user => (
            <Profile
              key={user.id}
              user={user}
              openModalWindow={this.openModalWindow}
            />
          ))}
        </div>
      </Fragment>
    );
  }
}

Profiles.defaultProps = {
  users: []
};

Profiles.propTypes = {
  users: PropTypes.array.isRequired
};

export default Profiles;
