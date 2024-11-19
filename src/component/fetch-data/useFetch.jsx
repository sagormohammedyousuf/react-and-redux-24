import {useEffect,useState} from 'react'

const useFetch = (url) => {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      // setTimeout(()=>)
      .then((data) => setData(data));
  }, [url]);
  return [data]
}

export default useFetch