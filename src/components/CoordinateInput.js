import React, {useState} from "react";
import InputMask from 'react-input-mask';


const InitialState = {
  mask: {
    dec: {
      lan: '99.9999999',
      lon: '99.999999',
    },
    dms: {
      lan: '999°99\'99.9999',
      lon: '999°99\'99.9999'
    }
  },
  currentInputLan: '',
  currentInputLog: '',
  format: 'decimal'

}

const CoordinateInput = function () {
  const [currentState, setState] = useState(InitialState);
  const convertData = (e, data) => {
    switch (e.target.value) {
      case  'decimal':
        setState(Object.assign({}, currentState, {format: 'decimal'}))
        break;
      case 'DMS':
        setState(Object.assign({}, currentState, {format: 'DMS'}))
    }

    console.log(currentState)
  }

  const inputCoordinate = (e) => {
    switch (e.target.name) {
      case 'lan':
        console.log(e.target.value)
        setState(Object.assign({}, currentState, {currentInputLan: e.target.value}));
        break;
      case 'log':
        setState(Object.assign({}, currentState, {currentInputLog: e.target.value}));
    }
  }

  return (
    <form className='contact-form'>
      <div className='form-body'>
        <label>
          <input value='convert' type='button' name='convert data' onClick={convertData}/>
        </label>
        <br/>
        <label className='coordinate'>
          <InputMask
            onChange={(e) => {
              inputCoordinate(e)
            }}
            mask={currentState.format === "decimal" ? currentState.mask.dec.lan : currentState.mask.dms.lon}
            type='text'
            name='lan'
            placeholder='lan'
            value={currentState.currentInputLan}
          /><br/>
        </label>
        <label className='coordinate'>
          <InputMask onChange={(e) => {
            inputCoordinate(e)
          }}
                     mask={currentState.format === "decimal" ? currentState.mask.dec.lan : currentState.mask.dms.lon}
                     className='coordinate'
                     type='text'
                     name='log'
                     placeholder='log'
                     value={currentState.currentInputLog}
          /><br/>
        </label>
        <label className='choose-format'> decimal
          <input
            onChange={(e) => convertData(e)}
            className='choose-format'
            type='radio'
            name='format'
            value='decimal'
            checked={currentState.format === 'decimal'}
          />
        </label>
        <label className='choose-format'> DMS
          <input
            onChange={(e, ) => convertData(e)}
            className='choose-format'
            type='radio'
            name='format'
            value='DMS'
            checked={currentState.format === 'DMS'}
          />
        </label>

        <hr/>

        <div className='result'>
          <span>{currentState.currentInputLan}</span> <br/>
          <span>{currentState.currentInputLog}</span>
        </div>
      </div>
    </form>
  )
}

export default CoordinateInput;