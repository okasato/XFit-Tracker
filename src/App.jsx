import React, { Component } from 'react';
import SelectBox from './SelectBox';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      workouts: [],
      selectedSquat: '',
      selectedDeadlift: '',
      selectedPress: '',
      selectedClean: '',
      selectedJerk: '',
      selectedSnatch: '',
      selectedPullups: '',
      selectedPushups: '',
      selectedOthers: '',
      typyedTextSquat: '',
      typyedTextDeadlift: '',
      typyedTextPress: '',
      typyedTextClean: '',
      typyedTextJerk: '',
      typyedTextSnatch: '',
      typyedTextPullups: '',
      typyedTextPushups: '',
      typyedTextOthers: ''
    }
    this.getWorkouts = this.getWorkouts.bind(this);
    this.setWorkouts = this.setWorkouts.bind(this);
    this.handleSave = this.handleSave.bind(this);

    this.saveSquat = this.saveSquat.bind(this);
    this.saveDeadlift = this.saveDeadlift.bind(this);
    this.savePress = this.savePress.bind(this);
    this.saveClean = this.saveClean.bind(this);
    this.saveJerk = this.saveJerk.bind(this);
    this.saveSnatch = this.saveSnatch.bind(this);
    this.savePullups = this.savePullups.bind(this);
    this.savePushups = this.savePushups.bind(this);
    this.saveOthers = this.saveOthers.bind(this);

    this.saveTextInSquat = this.saveTextInSquat.bind(this);
    this.saveTextInDeadlift = this.saveTextInDeadlift.bind(this);
    this.saveTextInPress = this.saveTextInPress.bind(this);
    this.saveTextInClean = this.saveTextInClean.bind(this);
    this.saveTextInJerk = this.saveTextInJerk.bind(this);
    this.saveTextInSnatch = this.saveTextInSnatch.bind(this);
    this.saveTextInPullups = this.saveTextInPullups.bind(this);
    this.saveTextInPushups = this.saveTextInPushups.bind(this);
    this.saveTextInOthers = this.saveTextInOthers.bind(this);
  }

  getWorkouts() {
    return fetch(`${process.env.BASE_URL}/api/workouts`)
      .then(res => res.json())
  }

  setWorkouts() {
    this.getWorkouts()
      .then(workouts => this.setState({ workouts }))
  }

  handleSave() {
    fetch(`${process.env.BASE_URL}/api/users/${this.props.username}`, {
      method: 'POST',
      body: JSON.stringify({ 
        date: this.props.date,
        record: [
          this.state.selectedSquat,
          this.state.typyedTextSquat,
          this.state.selectedDeadlift,
          this.state.typyedTextDeadlift,
          this.state.selectedPress,
          this.state.typyedTextPress,
          this.state.selectedClean,
          this.state.typyedTextClean,
          this.state.selectedJerk,
          this.state.typyedTextJerk,
          this.state.selectedSnatch,
          this.state.typyedTextSnatch,
          this.state.selectedPullups,
          this.state.typyedTextPullups,
          this.state.selectedPushups,
          this.state.typyedTextPushups,
          this.state.selectedOthers,
          this.state.typyedTextOthers
        ]
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      })
    })
    .then(() => console.log('Successfully add your record of work out'))
    .catch(err => console.log(err))
  }

  saveSquat(selectedSquat) {
    this.setState({ selectedSquat });
  }
  
  saveTextInSquat(typyedTextSquat) {
    this.setState({ typyedTextSquat });
  }

  saveDeadlift(selectedDeadlift) {
    this.setState({ selectedDeadlift });
  }

  saveTextInDeadlift(typyedTextDeadlift) {
    this.setState({ typyedTextDeadlift });
  }

  savePress(selectedPress) {
    this.setState({ selectedPress });
  }

  saveTextInPress(typyedTextPress) {
    this.setState({ typyedTextPress });
  }
  
  saveSnatch(selectedSnatch) {
    this.setState({ selectedSnatch });
  }

  saveTextInSnatch(typyedTextSnatch) {
    this.setState({ typyedTextSnatch });
  }

  saveClean(selectedClean) {
    this.setState({ selectedClean });
  }

  saveTextInClean(typyedTextClean) {
    this.setState({ typyedTextClean });
  }

  saveJerk(selectedJerk) {
    this.setState({ selectedJerk });
  }
  
  saveTextInJerk(typyedTextJerk) {
    this.setState({ typyedTextJerk });
  }

  savePullups(selectedPullups) {
    this.setState({ selectedPullups });
  }

  saveTextInPullups(typyedTextPullups) {
    this.setState({ typyedTextPullups });
  }

  savePushups(selectedPushups) {
    this.setState({ selectedPushups });
  }

  saveTextInPushups(typyedTextPushups) {
    this.setState({ typyedTextPushups });
  }

  saveOthers(selectedOthers) {
    this.setState({ selectedOthers });
  }

  saveTextInOthers(typyedTextOthers) {
    this.setState({ typyedTextOthers });
  }

  componentDidMount() {
    this.setWorkouts();
  }
  
  render() {
    console.log('this is workouts', this.state);
    if (!this.state.workouts.length) {

      return (
        <div className='app'>
          Loading...
        </div>
      )
    } else {

      return (
        <div className='app'>
          <SelectBox 
            label={'Squat'} 
            workouts={this.state.workouts[0].exercise.squat}
            saveWorkout={this.saveSquat}
            saveText={this.saveTextInSquat} 
            />
          <SelectBox 
            label={'Deadlift'} 
            workouts={this.state.workouts[0].exercise.deadlift}
            saveWorkout={this.saveDeadlift}
            saveText={this.saveTextInDeadlift} 
            />
          <SelectBox 
            label={'Press'} 
            workouts={this.state.workouts[0].exercise.press}
            saveWorkout={this.savePress}
            saveText={this.saveTextInPress} 
            />
          <SelectBox 
            label={'Clean'} 
            workouts={this.state.workouts[0].exercise.clean}
            saveWorkout={this.saveClean}
            saveText={this.saveTextInClean} 
            />
          <SelectBox 
            label={'Jerk'} 
            workouts={this.state.workouts[0].exercise.jerk}
            saveWorkout={this.saveJerk}
            saveText={this.saveTextInJerk} 
            />
          <SelectBox 
            label={'Snatch'} 
            workouts={this.state.workouts[0].exercise.snatch}
            saveWorkout={this.saveSnatch}
            saveText={this.saveTextInSnatch} 
            />
          <SelectBox 
            label={'Pullups'} 
            workouts={this.state.workouts[0].exercise.pullups}
            saveWorkout={this.savePullups}
            saveText={this.saveTextInPullups} 
            />
          <SelectBox 
            label={'Pushups'} 
            workouts={this.state.workouts[0].exercise.pushups}
            saveWorkout={this.savePushups}
            saveText={this.saveTextInPushups} 
            />
          <SelectBox 
            label={'Others'} 
            workouts={this.state.workouts[0].exercise.others}
            saveWorkout={this.saveOthers}
            saveText={this.saveTextInOthers} 
            />
          <button onClick={this.handleSave}>Save</button>
        </div>
      )
    }
  }
}