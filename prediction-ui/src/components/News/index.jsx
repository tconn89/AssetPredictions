import React, { useEffect, useState } from 'react';
import moment from 'moment';
import useGlobalNews from 'hooks/useGlobalNews';
import Loader from 'react-loader-spinner'
import { getDomain } from 'util/parse';
import './News.scss'

export default function News() {
  const [company, companySet] = useState('')
  const [list, listSet] = useState([]);
  const [{ news }, { fetchNews }] = useGlobalNews();

  const onEnter = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  }
  const handleSubmit = async () => {
    console.log('submit')
    fetchNews(company)
  }
  useEffect(() => {
    console.log(news);
    if(news.loading === false)
      news.response && listSet(news.response.body);
  }, [news])

  return (
    <div>
      <div className="d-flex container search">
        <input onKeyUp={onEnter} type="text" placeholder="company name" onChange={e => companySet(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
        { news.loading ? (
            <div className="loader">
              <Loader type="ThreeDots" height={40} width={40} /> 
            </div>
          ) : null
        }
      </div>
      { list.map(data => (
        <div className="card p-5" key={data.id}>
          <h2>{data.headline}</h2>  
          <div><p className="date">{moment(data.datetime*1000).calendar()}</p></div>  
          <div>{data.summary}</div>  
          <div><a href={data.url} target="_blank" rel="noopener noreferrer">{getDomain(data.url)}</a></div>  
        </div>
      ))}
    </div>
  )
}