import React, { Component } from 'react';

export default class SelectBox extends Component {
  constructor(props) {
    super(props)
    this.state ={
      selectedWorkouts: this.props.label,
      value: ''
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
        <div className='selectbox' style={{textAlign: 'center'}}>
          <div style={{fontFamily: 'sans-serif', marginBottom: 10, fontSize: 30}}>
            {this.props.label}
          </div> 
          <div>
            <select 
              className="select-field" 
              value={this.state.selectedWorkouts}
              onChange={e => this.handleChange(e)} 
              style={{width: 500, padding: 5, marginBottom: 10, fontSize: 20}}
            >
              <option 
                key={99} 
                value={this.props.label}
              >
                {'Choose today\'s ' + this.props.label.toLowerCase()}
              </option>
              {this.props.workouts.map((workout, index) => (<option key={index} value={workout}>{workout}</option>))}
            </select>
          </div>
          <textarea 
            cols={48} 
            rows={2} 
            value={this.state.value} 
            onChange={e => this.handleChangeTextarea(e)} 
            placeholder='Please add more details. For example, weight, reps, etc.' 
            style={{padding: 5, marginBottom: 20, fontSize: 20}}
          ></textarea>
        </div>
      )
  }
}