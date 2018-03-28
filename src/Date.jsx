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

  componentDidMount() {
    fetch(`${process.env.BASE_URL}/api/users/${this.props.username}`)
      .then(res => {
        console.log('Successfully get data');
        return res.json();
      })
      .then(data => data[0].workouts)
      .then(result => {
        this.setState({ result });
      })
      .catch(err => console.log(err))
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
        <div style={{textAlign: 'center', marginTop: 20, marginBottom: 40, color: 'white', fontFamily: 'Lato', fontSize: 24, padding: 3}}>
          <div>{this.props.username}'s Workouts Record</div>
          <p></p>
          <input type='date' date={this.state.date} onChange={e => this.handleDateChange(e)} style={{fontSize: 22, padding: 3}}/>
          <button onClick={this.handleSearch} style={{WebkitAppearance: 'none', borderRadius: 3, fontSize: 24, padding: 3}}>Search</button>
          <div style={{display: 'inline'}}> or </div>
          <button onClick={this.handleCreateNewRecord} style={{WebkitAppearance: 'none', borderRadius: 3, fontSize: 24, padding: 3}}>Create</button>
        </div>
        <Result result={this.state.result}/>
      </div>
    )
  }
}