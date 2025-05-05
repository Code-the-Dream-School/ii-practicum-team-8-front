import React from 'react';
import Image1 from '../../assets/bali(1).jpg'; 
import Image2 from '../../assets/kyoto(2).jpg';
import Image3 from '../../assets/rio(3).jpg';
import Image4 from '../../assets/rome(4).jpg';


function Destination() {
  return (
    <div className='destination'>
      <h1 className='destination-title'>Top Destinations</h1>
      <div className='destination-grid'>
        <div className='destination-item'>
          <img alt='Bali, Indonesia' src={Image1}/>
          <p>Bali, Indonesia</p>
        </div>
        <div className='destination-item'>
          <img alt='Kyoto, Japan' src={Image2}/>
          <p>Kyoto, Japan</p>
        </div>
        <div className='destination-item'>
          <img alt='Rio de Janeiro, Brazil' src={Image3}/>
          <p>Rio de Janeiro, Brazil</p>
        </div>
        <div className='destination-item'>
          <img alt='Rome, Italy' src={Image4}/>
          <p>Rome, Italy</p>
        </div>
      </div>
    </div>
  );
};

export default Destination;
