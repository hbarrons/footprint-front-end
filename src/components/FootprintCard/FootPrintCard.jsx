import { Link } from 'react-router-dom'


const FootprintCard = ({ footprint, transportIcons }) => {

  let readDate = footprint?.created_at?.substring(0, 16)

  let idx = footprint?.transport_mode === 'walking' ? 1 : footprint?.transport_mode === 'e-bike' ? 2 : footprint?.transport_mode === 'driving' ? 3 : footprint?.transport_mode === 'cycling' ? 0 : ""
  // idx = footprint?.transport_mode === 'e-bike' ? 2 : ""
  // idx = footprint?.transport_mode === 'driving' ? 3 : ""
  // idx = footprint?.transport_mode === 'cycling' ? 0 : ""


  console.log(idx)



  return ( 
    <Link to={`/footprints/${footprint.id}`} state={{footprint}}>
      <div className="card">
        <h2 className='card-title'>{readDate}</h2>
        <h5 className='card-text'>Distance: {footprint.distance}</h5>
        <h5 className='card-text'>CO2 (g): {footprint.carbon_grams}</h5>
        <img src={transportIcons[idx]} alt="" />
      </div>
    </Link>
   );
}
 
export default FootprintCard;