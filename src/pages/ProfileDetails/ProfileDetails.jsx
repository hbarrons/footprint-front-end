import { useLocation } from "react-router-dom";
import './ProfileDetails.css'

const ProfileDetails = ({ footprints, transportIcons }) => {
  let location = useLocation()
  let transportArr = []

  let gramsArray = footprints?.map((footprint) => {
    let total = 0
    if (footprint.profile_id === location.state?.profile.id) {
      total = total + parseInt(footprint?.carbon_grams)
      transportArr.push(footprint.transport_mode)
    }
    return total
  })

  let bike = []
  let escooter = []
  let walk = []
  let drive = []
  let idx = 1

  footprints.map((footprint) => {
    if (footprint.profile_id === location.state?.profile.id) {
      if(footprint.transport_mode === 'bicycle') {
        bike.push(footprint.transport_mode)
      } else if (footprint.transport_mode === 'e-bike'){
        escooter.push(footprint.transport_mode)
      } else if (footprint.transport_mode === 'walking') {
        walk.push(footprint.transport_mode)
      } else if (footprint.transport_mode === 'cycling') {
        drive.push(footprint.transport_mode)
      }
      if (bike.length >= escooter.length && bike.length >= walk.length && bike.length >= drive.length) {
        idx = 0
      } else if (walk.length >= escooter.length && walk.length >= bike.length && walk.length >= drive.length) {
        idx = 1
      } else if (escooter.length >= bike.length && escooter.length >= walk.length && escooter.length >= drive.length) {
        idx = 2
      } else if (drive.length >= escooter.length && drive.length >= bike.length && drive.length >= walk.length) {
        idx = 3
      }
    }
    return ""
  })

  let totalGrams = gramsArray.length ?
    gramsArray?.reduce((a, b) => a + b)
    :
    "No Footprints"

  let totalTons = (totalGrams * 0.0000011023).toString().slice(0, 5)

  return ( 
    <>
      <h1 className="username">{location.state?.profile?.name}'s Footprint</h1>
      <section className="profiledetails">
        <div className="totalprint">
          <h2>Total Footprint </h2>
          <div className="grams-tons">
            {totalGrams} g / {totalTons} tons
          </div>
        </div>
        <div className="averageprint">
          <h2>Average Footprint </h2>
          <div className="averages">
            {(totalGrams / gramsArray.length).toFixed(0)} g / footprint
          </div>
        </div>
        <div className="numberprints">
          <h2 className="numbertitle">Number of Footprints</h2>
          <div>
            <br /><br />{gramsArray.length} <br />
          </div>
        </div>
        <div className="preference">
          <h2>Preferred Transportation </h2>
            <img src={transportIcons[idx]} alt="" />
        </div>
      </section>
    </>
   );
}
 
export default ProfileDetails;