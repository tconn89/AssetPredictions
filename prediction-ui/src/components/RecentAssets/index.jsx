import React, { useEffect } from 'react';
import moment from 'moment';
import usePredictionManager from 'hooks/usePredictionManager';

import './RecentAssets.scss'

export const RecentAssets = props => {
const [state, { getListRequest}] = usePredictionManager();

useEffect(() => {
  getListRequest()
}, []);

  if (!state.response)
    return null
  return (
    <div>
       <div className="d-flex">
          <div className="p-5">Price</div> 
          <div className="p-5">Prediction</div> 
          <div className="p-5">Date</div> 
       </div>
     { state.response.items.map((item) => (
       <div className="d-flex" key={item.assetId}>
          <div className="p-5">{item.price}</div> 
          <div className="p-5">{item.value}</div> 
          <div className="p-5">{moment(item.createdAt).fromNow()}</div> 
       </div>
     ))} 
    </div>
  )
}