import { Link } from 'react-router-dom'


const FootprintCard = ({ footprint }) => {


  return ( 
    <Link to={`/footprints/${footprint.id}`} state={{footprint}}>
      <div className="card">
        <h2 className='card-title'>See Footprint Details:</h2>
        <h4>Date: {footprint.created_at}</h4>
        <h4 className='card-text'>Distance: {footprint.distance}</h4>
        <h4 className='card-text'>CO2 (grams): {footprint.carbon_garms}</h4>
        <h4>ID: {footprint.id}</h4>
      </div>
    </Link>
   );
}
 
export default FootprintCard;