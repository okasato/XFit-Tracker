import React, { Component } from 'react';

export default class SelectBox extends Component {
  constructor(props) {
    super(props)
    this.state ={
      selectedWorkouts: this.props.label,
      value: 'Please add more details. For example, weight, reps, etc.'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeTextarea = this.handleChangeTextarea.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ selectedWorkouts: e.target.value });
    this.props.saveWorkout(e.target.value);
  }

  handleChangeTextarea(e) {
    e.preventDefault();
    this.setState({ value: e.target.value });
    this.props.saveText(e.target.value);
  }

  render() {
      return (
        <div className='selectbox'>
          {this.props.label} 
          <div>
            <select className="select-field" value={this.state.selectedWorkouts} onChange={e => this.handleChange(e)}>
              <option key={99} value={this.props.label}>{'Choose today\'s ' + this.props.label.toLowerCase()}</option>
              {this.props.workouts.map((workout, index) => (<option key={index} value={workout}>{workout}</option>))}
            </select>
          </div>
          <textarea cols={50} value={this.state.value} onChange={e => this.handleChangeTextarea(e)}></textarea>
        </div>
      )
  }
}