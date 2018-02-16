import React, { Component } from 'react';

export default class SelectBox extends Component {
  constructor(props) {
    super(props)
    this.state ={
      selectedWorkouts: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ selectedWorkouts: e.target.value })
  }

  render() {
    if (!this.props.workouts.length) {
      return (
        <div className='selectbox'>
          Loading...
        </div>
      )
    } else { 
      return (
        <div className='selectbox'>
          <div>
            Squat: 
            <select className="select-field" value={this.state.selectedWorkouts} onChange={e => this.handleChange(e)}>
              {this.props.workouts.map((workout, index) => (<option key={index} value={workout}>{workout}</option>))}
            </select>
          </div>
          <textarea></textarea>
          {/* <div>
            Deadlift: 
            <select className="select-field" value={this.state.selectedWorkouts} onChange={e => this.handleChange(e)}>
              {this.props.workouts[0].exercise.deadlift.map((workout, index) => (<option key={index} value={workout}>{workout}</option>))}
            </select>
          </div>
          <textarea></textarea>
          <div>
            Press: 
            <select className="select-field" value={this.state.selectedWorkouts} onChange={e => this.handleChange(e)}>
              {this.props.workouts[0].exercise.press.map((workout, index) => (<option key={index} value={workout}>{workout}</option>))}
            </select>
          </div>
          <textarea cols='50'></textarea>
          <div>
            Clean: 
            <select className="select-field" value={this.state.selectedWorkouts} onChange={e => this.handleChange(e)}>
              {this.props.workouts[0].exercise.clean.map((workout, index) => (<option key={index} value={workout}>{workout}</option>))}
            </select>
          </div>
          <textarea></textarea>
          <div>
            Jerk: 
            <select className="select-field" value={this.state.selectedWorkouts} onChange={e => this.handleChange(e)}>
              {this.props.workouts[0].exercise.jerk.map((workout, index) => (<option key={index} value={workout}>{workout}</option>))}
            </select>
          </div>
          <textarea></textarea>
          <div>
            Snatch: 
            <select className="select-field" value={this.state.selectedWorkouts} onChange={e => this.handleChange(e)}>
              {this.props.workouts[0].exercise.snatch.map((workout, index) => (<option key={index} value={workout}>{workout}</option>))}
            </select>
          </div>
          <textarea></textarea>
          <div>
            Pullups: 
            <select className="select-field" value={this.state.selectedWorkouts} onChange={e => this.handleChange(e)}>
              {this.props.workouts[0].exercise.pullups.map((workout, index) => (<option key={index} value={workout}>{workout}</option>))}
            </select>
          </div>
          <textarea></textarea>
          <div>
            Pushups: 
            <select className="select-field" value={this.state.selectedWorkouts} onChange={e => this.handleChange(e)}>
              {this.props.workouts[0].exercise.pushups.map((workout, index) => (<option key={index} value={workout}>{workout}</option>))}
            </select>
          </div>
          <textarea></textarea>
          <div>
            Others: 
            <select className="select-field" value={this.state.selectedWorkouts} onChange={e => this.handleChange(e)}>
              {this.props.workouts[0].exercise.others.map((workout, index) => (<option key={index} value={workout}>{workout}</option>))}
            </select>
          </div>
          <textarea></textarea> */}
        </div>
      )
    } 
  }
}