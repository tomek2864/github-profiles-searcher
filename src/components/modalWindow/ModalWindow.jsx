import React, { Fragment } from "react";

const ModalWindow = props => {
  const {
    avatar_url,
    bio,
    blog,
    company,
    created_at,
    email,
    events_url,
    followers,
    followers_url,
    following,
    following_url,
    gists_url,
    gravatar_id,
    hireable,
    html_url,
    id,
    location,
    login,
    name,
    node_id,
    organizations_url,
    public_gists,
    public_repos,
    received_events_url,
    repos_url,
    site_admin,
    starred_url,
    subscriptions_url,
    type,
    updated_at,
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
        <div className="modal-window-content">
          <img src={avatar_url} alt="Profile logo" />
          <div className="modal-window-text">
            <div className="modal-window-text-header">
              <h2>
                {name} {location && `from ${location}`}
              </h2>
              <div className="modal-window-no-repos">
                {public_repos && `Repositories: ${public_repos}`}
              </div>
            </div>
            <h3>{company && `from company ${company}`}</h3>
            <h2>{bio && `About me: ${bio}`}</h2>

            <h3>{email && `email adress: ${email}`}</h3>

            <a href={html_url}><div className="modal-window-link-github">
              Open profil on Github
            </div></a>
          </div>
        </div>
      </div>
      <div className="modal-window-background" />
    </Fragment >
  );
};

export default ModalWindow;
