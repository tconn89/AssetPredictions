import React, { useEffect, useState } from 'react';
import useGlobalNews from 'hooks/useGlobalNews';
import { getDomain } from 'util/parse';
import './Filters.scss'

export default function Filter() {
  const [{ news }] = useGlobalNews();
  const [filters, filtersSet] = useState([]);
  const data = news.response && news.response.body;
  useEffect(() => {
    if (data) {
      const result = {}
      data.forEach(item => {
        const domain = getDomain(item.url)
        if (result[domain])
          result[domain] += 1;
        else
          result[domain] = 1;
      })
      filtersSet(Object.keys(result).map(key => ({ domain: key, count: result[key] })));
    }
  }, [data])
  if (!news.response?.body)
    return null;
  return (
    <div>
      { filters.map(filter => (
        <div key={filter.domain} className="d-flex filter">
          <div>{filter.domain}</div>
          <div>&nbsp;({filter.count})</div>
        </div>
      ))}
    </div>
  )
}
