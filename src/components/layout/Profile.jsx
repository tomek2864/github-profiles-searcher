import React, { Fragment } from "react";

const Profile = props => {
  const { avatar_url, login } = props.user;
  const openModalWindow = () => {
    props.openModalWindow(props.user);
  };

  return (
    <Fragment>
      <div className="profile-cards" onClick={openModalWindow}>
        <div className="image-rectangle">
          <img src={avatar_url} alt="Profile logo" />
        </div>
        <h4>{login}</h4>
      </div>
    </Fragment>
  );
};

export default Profile;
