import React, { Component } from 'react';
import Result from './Result';

export default class Date extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      result: []
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleCreateNewRecord = this.handleCreateNewRecord.bind(this);
  }

  handleSearch(e) {
    e.preventDefault();
    const date = this.state.date;
    fetch(`${process.env.BASE_URL}/api/users/${this.props.username}/${date}`)
      .then(res => {
        console.log('Successfully get data in the date');
        return res.json();
      })
      .then(result => this.setState({ result }))
      .catch(err => console.log(err))
  }

  handleCreateNewRecord(e) {
    e.preventDefault();
    const date = this.state.date;
    this.props.setDate(date);
    this.props.changeCurrentView('App');
  }

  handleDateChange(e) {
    e.preventDefault();
    this.setState({ date: e.target.value });
  }

  render() {
    return (
      <div className='date'>
        <div style={{textAlign: 'center', marginTop: 20, marginBottom: 40}}>
          <div style={{fontFamily: 'sans-serif', fontSize: 24, padding: 3}}>Search a date</div>
          <input type="text" date={this.state.date} onChange={e => this.handleDateChange(e)} style={{fontSize: 24, padding: 3}}/>
          <button onClick={this.handleSearch} style={{WebkitAppearance: 'none', padding: 4, fontSize: 24, borderRadius: 3}}>Search</button>
          <div style={{fontFamily: 'sans-serif', fontSize: 24, display: 'inline'}}> Or </div>
          <button onClick={this.handleCreateNewRecord} style={{WebkitAppearance: 'none', padding: 4, fontSize: 24, borderRadius: 3}}>Create</button>
        </div>
        <Result result={this.state.result}/>
      </div>
    )
  }
}