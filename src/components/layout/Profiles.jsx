import React, { Fragment, Component } from "react";
import Profile from "./Profile";
import PropTypes from "prop-types";
import ModalWindow from "../modalWindow/ModalWindow";

class Profiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalWindowOpen: false,
      user: {}
    };
  }

  openModalWindow = user => {
    this.setState({ isModalWindowOpen: true, user: user });
    console.log(user);
  };

  closeModalWindow = () => {
    this.setState({ isModalWindowOpen: false, user: {} });
  };

  render() {
    const { users } = this.props;

    return (
      <Fragment>
        {this.state.isModalWindowOpen && (
          <ModalWindow
            user={this.state.user}
            closeWindow={this.closeModalWindow}
          />
        )}
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
