import { Link } from 'react-router-dom';

import Image1 from '../assets/bali(1).jpg';
import Image2 from '../assets/kyoto(2).jpg';
import Image3 from '../assets/rio(3).jpg';
import Image4 from '../assets/rome(4).jpg';

function Destination() {
  return (
    <div className="destination">
      <h1 className="destination-title">Top Destinations</h1>
      <div className="destination-grid">
        <Link to="hotels?locationId=10" className="destination-item">
          <img alt="Bali, Indonesia" src={Image1} />
          <p>Bali, Indonesia</p>
        </Link>
        <Link to="hotels?locationId=11" className="destination-item">
          <img alt="Kyoto, Japan" src={Image2} />
          <p>Kyoto, Japan</p>
        </Link>
        <Link to="hotels?locationId=12" className="destination-item">
          <img alt="Rio de Janeiro, Brazil" src={Image3} />
          <p>Rio de Janeiro, Brazil</p>
        </Link>
        <Link to="hotels?locationId=13" className="destination-item">
          <img alt="Rome, Italy" src={Image4} />
          <p>Rome, Italy</p>
        </Link>
      </div>
    </div>
  );
}

export default Destination;
