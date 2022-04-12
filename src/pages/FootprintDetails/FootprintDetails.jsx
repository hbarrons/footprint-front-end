import { Link, useLocation } from "react-router-dom";


const FootprintDetails = ({ deleteFootprint }) => {
  let location = useLocation()

  let readDate = (location.state.footprint.created_at).substring(0, 16)
  console.log(readDate)

  return ( 
    <>
    {console.log(deleteFootprint)}
    {console.log(location.state.footprint.id)}
      <div className="details">
        <h1>Footprint Info</h1>
        <h4>Date: {readDate}</h4>
        <h4>Distance: {location.state.footprint.distance}</h4>
        <h4>Transportation Method: {location.state.footprint.transport_mode}</h4>
        <h4>CO2: {location.state.footprint.carbon_grams}g</h4>
        <h4>Starting ZIP: {location.state.footprint.start}</h4>
        <h4>Ending ZIP: {location.state.footprint.end}</h4>
        <Link to={`/footprints/${location.state.footprint.id}/edit`}>
          <button className="btn btn-primary">Update</button>
        </Link>
        <button onClick={() => deleteFootprint(location.state.footprint.id)}  className="btn btn-danger">Delete</button>
      </div>
    </>
   );
}
 
export default FootprintDetails;