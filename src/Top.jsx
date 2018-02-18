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
      date: ''
    }
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleSignIn(e) {
    e.preventDefault();
    const username = this.state.value;
    fetch(`${process.env.BASE_URL}/api/users/${username}`)
    .then(res => {
      console.log('Successfully sign in');
      console.log(res.json());
    })
    .catch(err => console.log(err))
  }

  handleSignUp(e) {
    e.preventDefault();
    const username = this.state.value;
    fetch(`${process.env.BASE_URL}/api/users`, {
      method: 'POST',
      body: JSON.stringify({ username }),
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      })
    })
    .then(() => console.log('Successfully create new user'))
    .catch(err => console.log(err))
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ value: e.target.value });
  }

  handleDateChange(e) {
    e.preventDefault();
    this.setState({ date: e.target.value });
  }

  render() {
    return (
      <div className='top'>
        <Navbar />
        <LoginPage />
        <input type='text' value={this.state.value} onChange={e => this.handleChange(e)} />
        <button onClick={this.handleSignUp}>Sign Up</button>
        {' or '}
        <button onClick={this.handleSignIn}>Sign In</button>
        <div>
          Date
          <input type="text "date={this.state.date} onChange={e => this.handleDateChange(e)}/>
        </div>
        <Date username={this.state.value}/>
        <App date={this.state.date} username={this.state.value}/>
      </div>
    )
  }
}