import { useLocation } from "react-router-dom";


const FootprintDetails = (props) => {
  let location = useLocation()

  return ( 
    <>
    {console.log(props)}
      <div className="details">
        <h1>Footprint Info:</h1>
        <h4>Date: {location.state.footprint.created_at}</h4>
        <h4>Distance: {location.state.footprint.distance}</h4>
        <h4>Transportation Method: {location.state.footprint.transport_mode}</h4>
        <h4>CO2: {location.state.footprint.carbon_grams}g</h4>
        <h4>Starting ZIP: {location.state.footprint.start}</h4>
        <h4>Ending ZIP: {location.state.footprint.end}</h4>
      </div>
    </>
   );
}
 
export default FootprintDetails;