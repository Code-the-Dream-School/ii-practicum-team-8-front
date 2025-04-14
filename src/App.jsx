import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { getAllData } from './util/index';
import Handshake from '@mui/icons-material/Handshake';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ListHotels from './components/hotels/ListHotels';
import HotelDetails from './components/hotels/HotelDetails';

const URL = `${import.meta.env.VITE_APP_API_URL}/api/v1`;

const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    (async () => {
      const myData = await getAllData(URL);
      setMessage(myData.data);
    })();

    return () => {
      console.log('unmounting');
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Typography
              variant="h6"
              component="h4"
              marginTop={3}
              marginBottom={2}
            >
              <Handshake />
              {message}
            </Typography>
          }
        />
        <Route path="hotels" element={<ListHotels />} />
        <Route path="hotels/:id" element={<HotelDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
