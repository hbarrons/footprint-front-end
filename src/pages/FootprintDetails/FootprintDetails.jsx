import { Link, useLocation } from "react-router-dom";
import moment from 'moment'
import './FootprintDetails.css'


const FootprintDetails = ({ deleteFootprint, transportIcons }) => {
  let location = useLocation()
  let readDate = (location.state.footprint.created_at)?.substring(0, 16)
  let idx = location.state.footprint?.transport_mode === 'walking' ? 1 : location.state.footprint?.transport_mode === 'e-bike' ? 2 : location.state.footprint?.transport_mode === 'driving' ? 3 : location.state.footprint?.transport_mode === 'cycling' ? 0 : ""

  return ( 
    <>
      <div className="footprintdetails">
        <div className="card">
          <h1>Footprint Info</h1>
          <h4>{moment(location.state.footprint?.created_at).format("MMMM Do YYYY")}</h4>
          <img src={transportIcons[idx]} alt="transportation mode icon" />
          <h4>Distance: {location.state.footprint.distance} miles</h4>
          <h4>CO2: {location.state.footprint.carbon_grams}g</h4>
          <h4>Starting ZIP: {location.state.footprint.start}</h4>
          <h4>Ending ZIP: {location.state.footprint.end}</h4>
          <Link to={`/footprints/${location.state.footprint.id}/edit`} className='buttons'>
            <button className="btn btn-primary">Update</button>
          </Link>
          <button onClick={() => deleteFootprint(location.state.footprint.id)}  className="btn btn-danger">Delete</button>
        </div>
      </div>
    </>
   );
}
 
export default FootprintDetails;