// Node Modules
import React, { Component } from 'react';

// Helpers
import importAll from 'helpers/importAll';

// Styles
import styles from './Profile.scss';

// Images
const portraits = importAll(require.context('./img/users/'));

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  renderPortrait = () => {
    const { user } = this.props;

    let src = portraits[`user_${user.id}.jpg`];
    if (!src) src = portraits['user_default.jpg'];

    return <img src={src} alt={`Portrait de ${user.firstname} ${user.lastname} `} />
  };

  render() {
    const { user, handlePage } = this.props;

    return (
      <div className={styles.root}>
        <div className={styles.portrait}>{this.renderPortrait()}</div>
        <div className={styles.fiche}>
          <h1>{user.firstname} {user.lastname}</h1>
          <ul className={styles.details}>
            <li><strong>Email</strong>: <a href={`mailto:${user.email}`}>{user.email}</a></li>
            <li><strong>Âge</strong>: {user.age}</li>
            <li><strong>Ville</strong>: {user.city}</li>
          </ul>
          {user.info && <p className={styles.info} dangerouslySetInnerHTML={{__html: user.info}}></p>}
          {!user.info && <p>Cet utilisateur n'a pas de description.</p>}
        </div>
      </div>
    );
  }
}

export default Profile;