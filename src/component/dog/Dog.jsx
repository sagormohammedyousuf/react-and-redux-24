import React,{ useEffect , useState, useContext } from "react";
import { UserContext } from "../../page/blog/Blog";

const Dog = () => {

    const count = useContext(UserContext);

     const [dogImg, setDogImg] = useState("");

     useEffect(() => {
       fetch("https://dog.ceo/api/breeds/image/random")
         .then((response) => response.json())

           .then((data) => {
               setDogImg(data.message);
               console.log(data)
             });
         
         
     }, [count]);
    
    
    return <div>
        {dogImg && <img className="dog-img" src={dogImg} />}
    </div>;
}

export default Dog