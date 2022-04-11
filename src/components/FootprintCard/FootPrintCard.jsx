import { Link } from 'react-router-dom'

const FootprintCard = ({ footprint }) => {
  return ( 
    <Link to={`/footprints/${footprint.id}`} className="card">
      <h1>See Footprint Details:</h1>
      <h4>Distance: {footprint.distance}</h4>
      <h4>CO2 (grams): {footprint.carbon_garms}</h4>
    </Link>
   );
}
 
export default FootprintCard;