import React, { Component } from 'react';

export default class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSignIn(e) {
    e.preventDefault();
    const username = this.state.value;
    fetch(`${process.env.BASE_URL}/api/users/${username}`)
    .then(res => {
      console.log('Successfully sign in');
      console.log(res.json());
      this.props.setUsername(username);
      this.props.changeCurrentView('Date');
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

  render() {
    return (
      <div className='top' style={{textAlign: 'center', marginTop: 20, marginBottom: 40}}>
        <input type='text' value={this.state.value} onChange={e => this.handleChange(e)} placeholder='User Name'style={{fontSize: 24, padding: 3}}/>
        <button onClick={this.handleSignUp} style={{fontFamily: 'Lato', WebkitAppearance: 'none', padding: 4, fontSize: 24, borderRadius: 3, marginLeft: 5}}>Sign Up</button>
        <div style={{fontFamily: 'Lato', fontSize: 24, display: 'inline', color: 'white'}}> or </div>
        <button onClick={this.handleSignIn} style={{fontFamily: 'Lato', WebkitAppearance: 'none', padding: 4, fontSize: 24, borderRadius: 3}}>Sign In</button>
      </div>
    )
  }
}