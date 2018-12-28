import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import {FAKE_USER} from './api';
import './index.css';

class Root extends React.Component {
  state = {
    currentUser: FAKE_USER,
  };

  handleLogin = user => {
    this.setState({currentUser: user});
  };

  handleLogout = () => {
    this.setState({currentUser: null});
  };

  render() {
    return this.state.currentUser ? (
      <MainPage
        currentUser={this.state.currentUser}
        onLogout={this.handleLogout}
      />
    ) : (
      <LoginPage onLogin={this.handleLogin} />
    );
  }
}

ReactDOM.render(<Root />, document.querySelector('#root'));
