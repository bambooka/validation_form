import React from "react";
import InputMask from 'react-input-mask';


class CoordinateInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mask: {
        dec: {
          lan: '99.9999999',
          lon: '989.999999'
        },
        dms: {
          lan: "99°99'99.9999",
          lon: "180°99'99'9999"
        }
      },
      userData: {
        currentInputLan: '',
        currentInputLog: '',
        format: 'decimal',
        lan: '',
        log: ''
      }
    }
  }

  convertData(data) {
    return data;
  }

  inputCoordinate(e) {
    if(e.target.name === 'lan') {
      this.setState({
        ...this.state.userData, currentInputLan: e.target.value
      })
    } else if (e.target.name === 'log') {
      this.setState({
        ...this.state.userData, currentInputLan: e.target.value
      })
    }
  }

  render() {
    return (
      <form className='contact-form' onSubmit={this.sendEmail}>
        <div className='form-body'>
          <label>convert data
            <input type='button' name='convert data' onClick={this.convertData}/>
          </label>
          <label className='coordinate'> lan
            <InputMask
              onChange={this.inputCoordinate}
              mask='99°9999999'
              type='text'
              name='topic'
              placeholder='Topic'
              value={this.state.userData.currentInputLan}
            /><br/>
          </label>
          <label className='coordinate'> log
            <InputMask
              onChange={this.inputCoordinate}
              mask="180°99'99.9999"
              className='coordinate'
              type='text'
              name='topic'
              placeholder='Topic'
              value={this.state.userData.currentInputLog}

            /><br/>
          </label>
          <label className='choose-format'> decimal
            <input
              onChange={() => this.inputCoordinate()}
              className='choose-format'
              type='radio'
              name='format'
              value={this.state.userData.currentInputLan}
            />
          </label>
          <label className='choose-format'> DMS
            <input
              onChange={() => this.inputCoordinate()}
              className='choose-format'
              type='radio'
              name='format'
              value={this.state.userData.currentInputLog}
            />
          </label>

          <hr />

          <div className='result'>
            <span>{this.state.userData.lan}</span>
            <span>{this.state.userData.log}</span>
          </div>
        </div>
      </form>
    )
  }
}

export default CoordinateInput;