import { Link } from 'react-router-dom'


const FootprintCard = ({ footprint }) => {

  let readDate = footprint.created_at.substring(0, 16)

  return ( 
    <Link to={`/footprints/${footprint.id}`} state={{footprint}}>
      <div className="card">
        <h2 className='card-title'>{readDate}</h2>
        <h5 className='card-text'>Distance: {footprint.distance}</h5>
        <h5 className='card-text'>CO2 (grams): {footprint.carbon_grams}</h5>
      </div>
    </Link>
   );
}
 
export default FootprintCard;