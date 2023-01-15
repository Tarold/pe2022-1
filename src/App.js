// - App
//   - UserPage
//     - Header
//       - ThemeSwitcher
//     - main
//     - Footer

import React, { Component } from 'react';
import CONSTANTS from './constants';
import { ThemeContext } from './contexts';
import UserPage from './pages/UserPage/index';
import styles from './App.module.sass';
import classNames from 'classnames';

const { LIGHT, DARK, PINK } = CONSTANTS.THEME;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: LIGHT,
    };
  }

  // 1
  setTheme = (newTheme) => {
    this.setState({ theme: newTheme });
  };

  render() {
    const { theme } = this.state;

    const pageClassName = classNames({
      [styles.lightTheme]: theme === LIGHT,
      [styles.darkTheme]: theme === DARK,
      [styles.pinkTheme]: theme === PINK,
    });

    return (
      // 2
      <ThemeContext.Provider value={{ theme, setTheme: this.setTheme }}>
        <div className={pageClassName}>
          <UserPage />
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
