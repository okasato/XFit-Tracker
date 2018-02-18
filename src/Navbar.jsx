import React, { Component } from 'react';

export default class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='navbar' style={{backgroundColor: 'gray', textAlign: 'center', padding: '1rem'}}>
        <h1 style={{color: 'white'}}>XFit-Tracker</h1>
      </div>
    )
  }
}