import { Link } from 'react-router-dom'
import './FootPrintCard.css'

const FootprintCard = ({ footprint, transportIcons }) => {

  let readDate = footprint?.created_at?.substring(0, 16)

  let idx = footprint?.transport_mode === 'walking' ? 1 : footprint?.transport_mode === 'e-bike' ? 2 : footprint?.transport_mode === 'driving' ? 3 : footprint?.transport_mode === 'cycling' ? 0 : ""

  return ( 
    <Link to={`/footprints/${footprint.id}`} state={{footprint}}>
      <div className="card">
        <h2 className='card-title'>{readDate}</h2>
        <div>
          <img src={transportIcons[idx]} alt="" />
        </div>
        <h5 className='card-text'>Distance: {footprint.distance}</h5>
        <h5 className='card-text'>CO2 (g): {footprint.carbon_grams}</h5>
      </div>
    </Link>
   );
}
 
export default FootprintCard;