import React from 'react'
import useFetch from '../fetch-data/useFetch'

const Post = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <div className="mt-5 pt-5">
      {data &&
        data.map((item) => {
          return (
            <p className="h5" key={item.id}>
              {item.title}
            </p>
          );
        })}
    </div>
  );
}

export default Post