// Node Modules
import React, { Component } from 'react';

// Components
import UserList from '../UserList';

// Styles
import styles from './Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { users, handlePage } = this.props;

    return (
      <div className={styles.root}>
        <h1>Titre lorem ipsum</h1>
        <p className={styles.subtitle}>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.</p>
        <UserList users={users} handlePage={handlePage} />
      </div>
    );
  }
}

export default Home;