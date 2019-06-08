import React, { Fragment } from "react";

const ModalWindow = props => {
  const {
    avatar_url,
    events_url,
    followers_url,
    following_url,
    gists_url,
    gravatar_id,
    html_url,
    id,
    login,
    node_id,
    organizations_url,
    received_events_url,
    repos_url,
    site_admin,
    starred_url,
    subscriptions_url,
    type,
    url
  } = props.user;

  const closeWindow = () => {
    props.closeWindow();
  };

  return (
    <Fragment>
      <div className="modal-window">
        <div className="modal-window-header">
          <h1>{login}</h1>
          <div className="modal-window-exit-button" onClick={closeWindow} />
        </div>
        <hr />
      </div>
      <div className="modal-window-background" />
    </Fragment>
  );
};

export default ModalWindow;
