import React, { Component } from 'react';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCalendar from '@fortawesome/fontawesome-free-solid/faCalendar';
import faPlay from '@fortawesome/fontawesome-free-solid/faPlay';
import faDotCircle from '@fortawesome/fontawesome-free-solid/faDotCircle';


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
                <div key={index} style={{fontFamily: 'Lato', backgroundColor: 'white', width: '35%', margin: '0 auto', textAlign: 'left'}}>
                  <hr/>
                  <div style={{fontSize: 24, padding: 3}}>
                    <FontAwesomeIcon icon={faCalendar} />
                    DATE
                    <div style={{fontSize: 20, padding: 3, marginLeft: 10}}>
                      {record.date}
                    </div>
                  </div>
                  <p></p>
                  <div style={{fontSize: 24, padding: 3}}>
                    <FontAwesomeIcon icon={faPlay} />
                    WORKOUT OF THE DAY
                  </div>
                  {record.record.map((workout, index) => {
                    if (workout && index%2 === 0) {
                      return(
                        <div key={index} style={{fontSize: 20, padding: 3, marginLeft: 10}}>
                          <FontAwesomeIcon icon={faDotCircle} />
                          {workout}
                        </div>
                      )
                    } else if (workout && index%2 === 1) {
                      return(
                        <div key={index} style={{fontSize: 20, padding: 3, marginLeft: 20}}>
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