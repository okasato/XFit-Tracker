import React, { Component } from 'react';
// import App from './App';

export default class Date extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: ''
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    e.preventDefault();
    const date = this.state.date;
    fetch(`${process.env.BASE_URL}/api/users/${this.props.username}/${date}`)
      .then(res => {
        console.log('Successfully get data in the date');
        return res.json();
      })
      .catch(err => console.log(err))
    }

  handleDateChange(e) {
    e.preventDefault();
    this.setState({ date: e.target.value });
  }

  render() {
    return (
      <div className='date' style={{textAlign: 'center', marginTop: 20, marginBottom: 40}}>
        Date
        <input type="text "date={this.state.date} onChange={e => this.handleDateChange(e)} style={{fontSize: 24, padding: 3}}/>
        <button onClick={this.handleSearch} style={{WebkitAppearance: 'none', padding: 4, fontSize: 24, borderRadius: 3}}>Search</button>
      </div>
    )
  }
}