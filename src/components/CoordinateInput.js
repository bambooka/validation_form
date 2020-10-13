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
    console.log(e)
    if(e.target.name === 'lan') {
      console.log(this.state)
      this.setState({
        ...this.state.userData, currentInputLan: e.target.value
      })
      console.log(this.state)
    } else if (e.target.name === 'log') {
      console.log(this.state)
      this.setState({
        ...this.state.userData, currentInputLog: e.target.value
      })
      console.log(this.state)
    }
  }

  render() {
    return (
      <form className='contact-form'>
        <div className='form-body'>
          <label>
            <input value='convert' type='button' name='convert data' onClick={this.convertData}/>
          </label>
          <br />
          <label className='coordinate'>
            <InputMask
              onChange={(e) => {
               this.inputCoordinate(e)
              }}
              mask='99°9999999'
              type='text'
              name='lan'
              placeholder='lan'
              value={this.state.userData.currentInputLan}
            /><br/>
          </label>
          <label className='coordinate'>
            <InputMask
              onChange={(e) => {
                this.inputCoordinate(e)
              }
              }
              // mask="180°99'99.9999"
              className='coordinate'
              type='text'
              name='log'
              placeholder='log'
              value={this.state.userData.currentInputLog}
            /><br/>
          </label>
          <label className='choose-format'> decimal
            <input

              className='choose-format'
              type='radio'
              name='format'
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