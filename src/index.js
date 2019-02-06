import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './ui/App';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('createCharacterApp')
  );
});