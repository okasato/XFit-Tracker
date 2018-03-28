import React, { Component } from 'react';
import App from './App';
import Date from './Date';
import Navbar from './Navbar';
import LoginPage from './LoginPage';

export default class Top extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      date: '',
      currentView: 'LoginPage',
      username: ''
    }
    this.changeCurrentView = this.changeCurrentView.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.setDate = this.setDate.bind(this);
  }

  changeCurrentView(currentView) {
    this.setState({ currentView });
  }

  setUsername(username) {
    this.setState({ username });
  }

  setDate(date) {
    this.setState({ date });
  }
  
  get currentView() {
    if (this.state.currentView === 'Date') {
      return <Date
        username={this.state.username}
        changeCurrentView={this.changeCurrentView}
        setDate={this.setDate}
      />
    }

    if (this.state.currentView === 'LoginPage') {
      return <LoginPage
        setUsername={this.setUsername}
        changeCurrentView={this.changeCurrentView}
      />
    }
    
    if (this.state.currentView === 'App') {
      return <App
        setUsername={this.setUsername}
        changeCurrentView={this.changeCurrentView}
        date={this.state.date}
        username={this.state.username}
      />
    }
  }

  render() {
    return (
      <div className='top'>
        <Navbar />
        {this.currentView}
      </div>
    )
  }
}