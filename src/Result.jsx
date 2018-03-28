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
          {this.props.result.map((record, index) => {
            if (record.record) {
              return(
                <div key={index} style={{fontFamily: 'Lato'}}>
                  <hr/>
                  <div style={{fontSize: 24, padding: 3}}>DATE</div>
                  <div style={{fontSize: 20, padding: 3}}>{record.date}</div>
                  <p></p>
                  <div style={{fontSize: 24, padding: 3}}>WORKOUT OF THE DAY</div>
                  {record.record.map((workout, index) => {
                    if (workout) {
                      return(
                        <div key={index} style={{fontSize: 20, padding: 3}}>
                          {workout}
                        </div>
                      )
                    }                  
                  })}
                </div>
              )
            }
          })}
        </div>
      )
    }
  }
}