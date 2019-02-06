// Collection
import usersJson from './collections/users.json';

// Helpers
import getJson from 'helpers/getJson';

const renderUserFullname = ({ firstname, lastname }) => `${lastname}, ${firstname}`;
const renderUserAge = ({ birthdate }) => new Date().getFullYear() - birthdate;

const getAllUsers = () => {
  return new Promise(resolve => {
    getJson(usersJson, users => {
      users.forEach(user => {
        user.fullname = renderUserFullname(user);
        user.age = renderUserAge(user);
      });

      resolve(users)
    });
  });
};

const getUserById = ({ userId }) => {
  return new Promise(resolve => {
    getJson(usersJson, users => resolve(users.find(user.id === userId)));
  });
};

export const userCollection = {
  getAll: getAllUsers,
  getById: getUserById
};