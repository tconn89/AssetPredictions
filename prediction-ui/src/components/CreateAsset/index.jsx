import React, { useState } from 'react';
import Loader from 'react-loader-spinner'
import usePredictionManager from 'hooks/usePredictionManager';

import './CreateAsset.scss'

export const CreateAsset = props => {
  const [prediction, predictionSet] = useState(null);
  const [state, { createRequest }] = usePredictionManager();

  const onSubmit = () => {
    if (!prediction) return console.log('Missing prediction')
    createRequest({ value: parseInt(prediction), asset: 'BITCOIN' })    
  }

  return (
    <>
      <h2>What is your prediction for the price of ฿</h2>
      <div className="main">
        <input placeholder="Enter a prediction" onChange={e => { predictionSet(e.target.value.replace(/\D/g, ''))}}/>
        <button onClick={onSubmit} >Submit</button>
        { state.status === 'fetching' &&
          <div className="result">
            <Loader
              type="ThreeDots"
              height={80}
              width={80}
            /> 
          </div>
        }
        { state.status === 'success' &&
          <Response item={state.response?.item} />
        }
      </div>
    </>
  )
}

function Response({ item }) {
  if (item) {
    const result = { diff: Math.abs(item.value - item.price).toFixed(0) };
    result.verb = item.value > item.price ? 'rise' : 'fall';
    return (
      <div className="result">
        <p>Thanks for the prediction.</p>
        <p>You expect the price of bitcoin to <strong className={result.verb}>{result.verb} </strong> by <strong>${result.diff}</strong> in a week!</p>
      </div>
    )
  }
  return null;
}
