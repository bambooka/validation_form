import React, {useState} from "react";
import MaskedInput from "react-text-mask/dist/reactTextMask";

const InitialState = {
  mask: {
    dec: {
      lan: [/[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/],
      lon: [/[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/],
    },
    dms: {
      lan: [/[0-1]/, /[0-8]/, /[0-9]/, '°', /[0-9]/, /[0-9]/, "'", /[0-9]/, /[0-9]/, ".", /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/],
      lon: [/[0-1]/, /[0-8]/, /[0-9]/, '°', /[0-9]/, /[0-9]/, "'", /[0-9]/, /[0-9]/, ".", /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]
    }
  },
  currentInputLan: '',
  currentInputLon: '',
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
  }

  const inputCoordinate = (e) => {
    switch (e.target.name) {
      case 'lan':
        console.log(e.target.value)
        setState(Object.assign({}, currentState, {currentInputLan: e.target.value}));
        break;
      case 'log':
        setState(Object.assign({}, currentState, {currentInputLon: e.target.value}));
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
          <MaskedInput
            onChange={(e) => {
              inputCoordinate(e)
            }}
            mask={currentState.format === "decimal" ? currentState.mask.dec.lan : currentState.mask.dms.lon}
            type='text'
            name='lan'
            value={currentState.currentInputLan}
            placeholder={currentState.format === 'decimal' ? '+12.3456789' : "-125°89'34.323"}
          /><br/>
        </label>
        <label className='coordinate'>
          <MaskedInput onChange={(e) => {
            inputCoordinate(e)
          }}
                       mask={currentState.format === "decimal" ? currentState.mask.dec.lan : currentState.mask.dms.lon}
                       className='coordinate'
                       type='text'
                       name='log'
                       placeholder={currentState.format === 'decimal' ? '+12.3456789' : "-125°89'34.323"}
                       value={currentState.currentInputLon}
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
            onChange={(e,) => convertData(e)}
            className='choose-format'
            type='radio'
            name='format'
            value='DMS'
            checked={currentState.format === 'DMS'}
          />
        </label>

        <hr/>

        <div className='result'>
          <MaskedInput
            mask={currentState.mask.dms.lan}
            value={currentState.currentInputLan}
          /> <br/>
          <MaskedInput
            mask={currentState.mask.dms.lon}
            value={currentState.currentInputLon}/> <br/>
        </div>
      </div>
    </form>
  )
}

export default CoordinateInput;