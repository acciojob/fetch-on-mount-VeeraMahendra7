
import React, { useEffect, useState } from "react";
import axios from 'axios';
import './../styles/App.css';

const App = () => {

  const [data, setData] = useState([]);

  console.log(data);

  useEffect(()=>{

    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      setData(res.data);
    })


  },[]);

  return (
    <div>
        {
            data.length > 0 && (
              data.map((item) => (
                <div key={item.id} style={{marginTop:'10px', marginBottom:'10px'}}>
                  <h1>{item.id}. {item.title}</h1>
                  <p>{item.body}</p>
                </div>
               ) )
            )
        }
    </div>
  )
}

export default App
