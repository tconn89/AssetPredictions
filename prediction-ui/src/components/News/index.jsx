import React, { useEffect, useState } from 'react';
import moment from 'moment';
import useGlobalNews from 'hooks/useGlobalNews';
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
      <div className="d-flex container">
        <input onKeyUp={onEnter} type="text" placeholder="company name" onChange={e => companySet(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
        { news.loading && <div>Loading</div>}
      </div>
      { list.map(data => (
        <div className="card p-5" key={data.id}>
          <h2>{data.headline}</h2>  
          <div><p className="date">{moment(data.datetime*1000).calendar()}</p></div>  
          <div>{data.summary}</div>  
          <div><a href={data.url} target="_blank" rel="noopener noreferrer">{data.url}</a></div>  
        </div>
      ))}
    </div>
  )
}