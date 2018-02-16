import React, { Component } from 'react';

export default class Top extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
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
    console.log('submit');
  }

  render() {
    return (
      <div className='top'>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.value} onChange={e => this.handleChange(e)} />
          <input type='submit' value='submit'/>
        </form>
      </div>
    )
  }
}