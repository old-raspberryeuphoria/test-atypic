// Node Modules
import React, { Component } from 'react';

// Components
import LoadSvg from '../LoadSvg';

// Styles
import styles from './UserList.scss';

// Images

class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orderBy: null
    }
  }

  orderUsers = () => {
    const { orderBy: { key, direction } } = this.state;
    const { users } = this.props;

    return users.sort((a, b) => {
      if (direction === 'asc') {        
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
      } else {    
        if (b[key] < a[key]) return -1;
        if (b[key] > a[key]) return 1;
        return 0;      
      }
    });
  };

  renderOrderButton = ({ key }) => {
    const { orderBy } = this.state;
    
    const isActive = orderBy && orderBy.key === key ? styles.isActive : null;
    const order = isActive ? styles[orderBy.direction] : styles.desc;

    return <LoadSvg svgName="triangle" className={[styles.triangleSvg, isActive, order].join(' ')} />;
  };

  handleOrderChange = ({ key }) => {
    const { orderBy } = this.state;

    const newKey = key;
    let newDirection = 'asc';

    if (orderBy && orderBy.key === key && orderBy.direction === 'asc') {
      newDirection = 'desc'
    } 

    this.setState({ 
      orderBy: {
        key: newKey,
        direction: newDirection
      }
    });
  };

  handleProfileOpening = ({ user }) => {
    const { handlePage } = this.props;

    handlePage.changePage({ currentPage: 'profile', user});
  };

  render() {
    const { users } = this.props;
    const { orderBy } = this.state;

    const userList = users.length && orderBy ? this.orderUsers() : users;

    return (
      <div className={styles.root}>
        <table className={styles.table} cellPadding={0} cellSpacing={0}>
          <tbody>
            <tr>
              <th onClick={() => this.handleOrderChange({ key: 'fullname' })}>Nom {this.renderOrderButton({ key: 'fullname' })}</th>
              <th onClick={() => this.handleOrderChange({ key: 'email' })}>Email {this.renderOrderButton({ key: 'email' })}</th>
              <th onClick={() => this.handleOrderChange({ key: 'age' })}>Âge {this.renderOrderButton({ key: 'age' })}</th>
              <th colSpan="2" onClick={() => this.handleOrderChange({ key: 'city' })}>Ville {this.renderOrderButton({ key: 'city' })}</th>
            </tr>
            {userList.map(user => (
              <tr key={user.id}>
                <td>{user.fullname}</td>
                <td><a href={`mailto:${user.email}`}>{user.email}</a></td>
                <td>{user.age}</td>
                <td>{user.city}</td>
                <td>
                  <span onClick={() => this.handleProfileOpening({ user })}>
                    <LoadSvg svgName="plus" className={styles.plusSvg} />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserList;