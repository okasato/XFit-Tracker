import React, { Component } from 'react';
import SelectBox from './SelectBox';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      workouts: []
    }
    this.getWorkouts = this.getWorkouts.bind(this);
    this.setWorkouts = this.setWorkouts.bind(this);
  }

  getWorkouts() {
    return fetch(`${process.env.BASE_URL}/api/workouts`)
      .then(res => res.json())
  }

  setWorkouts() {
    this.getWorkouts()
      .then(workouts => this.setState({ workouts }))
  }

  componentDidMount() {
    this.setWorkouts();
  }
  
  render() {
    console.log('this is workouts', this.state.workouts);
    if (!this.state.workouts.length) {
      return (
        <div className='app'>
          Loading...
        </div>
      )
    } else {

      return (
        <div className='app'>
          <SelectBox workouts={this.state.workouts[0].exercise.squat}/>
        </div>
      )
    }
  }
}