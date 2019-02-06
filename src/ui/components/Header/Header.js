// Node Modules
import React, { Component } from 'react';

// Components
import LoadSvg from '../LoadSvg';

// Styles
import styles from './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  handleBackToHome = () => {
    const { handlePage } = this.props;

    handlePage.changePage({ currentPage: 'home', userId: null });
  }

  render() {
    const { currentPage } = this.props;

    return (
      <header className={styles.root}>
        {currentPage !== 'home' && 
        <span onClick={this.handleBackToHome} className={styles.backButton}>
          <LoadSvg svgName="chevron" className={styles.chevron} />
          Retour
        </span>}
      </header>
    );
  }
}

export default Header;