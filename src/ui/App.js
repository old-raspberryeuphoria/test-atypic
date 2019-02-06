// Node Modules
import React, { Component } from 'react';

// Containers
import PageContainer from './containers/PageContainer';

// Components
import Header from './components/Header';

// Styles
import styles from './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 'home',
      users: [],
      user: null,
    };
    
    this.handlePage = {
      changePage: this.changePage,
      loadUsers: this.loadUsers
    };
  }

  handleClick = () => {
    const newData = Object.assign({}, this.state.data);

    newData[0][2].x = 6;

    console.log(this.state.data[0][2]);
    console.log(newData[0][2]);

    this.setState({ data: newData });
  }

  changePage = ({ currentPage, user = null }) => {
    const title = currentPage === 'home' ? 'Home' : `Profil de ${user.firstname} ${user.lastname}`;
    let url = `?page=${currentPage}`;

    if (currentPage === 'profile') {
      url += `&userId=${user.id}`;
    }

    window.history.replaceState(currentPage, title, url);

    this.setState({ currentPage, user });
  }

  loadUsers = ({ users }, callback) => {
    this.setState({ users }, () => {
      if (callback) callback();
    });
  };

  render() {
    const { currentPage, users, user } = this.state;

    return (
      <div className={styles.root}>
        <Header currentPage={currentPage} handlePage={this.handlePage} />
        <PageContainer currentPage={currentPage} users={users} user={user} handlePage={this.handlePage} />
      </div>
    );
  }
}

export default App;
