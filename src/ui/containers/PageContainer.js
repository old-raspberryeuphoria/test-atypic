// Node Modules
import React, { Component } from 'react';

// API
import { userCollection } from '../../api/users.js';

// Helpers
import getParameterByName from 'helpers/getParameterByName';

// Components
import Home from '../components/Home';
import Profile from '../components/Profile';

const PageComponent = ({ currentPage, users, user, handlePage }) => {
  if (currentPage === 'home') {
    return <Home users={users} handlePage={handlePage} />
  } else if (currentPage === 'profile') {
    return <Profile user={user} handlePage={handlePage} />
  }
};

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    userCollection
    .getAll()
    .then(users => this.props.handlePage.loadUsers({ users }, () => {
      const page = getParameterByName('page');
      const userId = parseInt(getParameterByName('userId'));

      if (page === 'profile') {
        const user = users.find(user => user.id === userId);

        if (user) {
          this.props.handlePage.changePage({ currentPage: page, user });
        }
      }
    }));
  }

  render() {
    const { currentPage, users, user, handlePage } = this.props;

    return (
      <div>
        <PageComponent currentPage={currentPage} users={users} user={user} handlePage={handlePage} />
      </div>
    );
  }
}

export default MainContainer;