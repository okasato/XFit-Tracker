import React, { Component } from 'react';

export default class Result extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.result.length) {
      return (
        <div className='result'></div>
      )      
    } else {
      return (
        <div className='result' style={{textAlign: 'center', marginTop: 20, marginBottom: 40}}>
          {this.props.result[0].record.map((record, index) => {
            if(record) {
              return(
                <div key={index} style={{fontFamily: 'sans-serif', fontSize: 24, padding: 3}}>
                  {record}
                </div>
              )
            }
          })}
        </div>
      )
    }
  }
}