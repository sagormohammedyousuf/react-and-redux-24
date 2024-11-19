import React,{useEffect, useState , createContext} from 'react'
import Dog from '../../component/dog/dog';
import Post from '../../component/post/Post';


const UserContext = createContext()
const Blog = () => {

    const [count, setCount] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            setCount(()=> count + 1)
        }, 2000);
    })


    return (
      <UserContext.Provider value={count}>
        <div className="h4 text-white  text-center w-100">
          <Post className="bg-info" />

          <h1 className='mt-5'>i have redeer {count} from useeffect</h1>
          <Dog />
        </div>
      </UserContext.Provider>
    );
}


export { UserContext };
export default Blog