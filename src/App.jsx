import React, { useState, useEffect } from 'react';
import { getAllData } from './util/index';

const URL = `${import.meta.env.VITE_APP_API_URL}/api/v1`;

function App() {

  console.log(URL);
  const [message, setMessage] = useState(''); 

  useEffect(() => {

    (async () => {
      const myData = await getAllData(URL)
      setMessage(myData.data);
    })();
      
    return () => {
      console.log('unmounting');
    }

  }, []);

  return (
    <>
      <h1>{message}</h1>
    </>
  );

}

export default App
