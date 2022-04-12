import { useLocation } from "react-router-dom";

const ProfileDetails = ({ footprints, transportIcons }) => {
  let location = useLocation()
  let transportArr = []

  let gramsArray = footprints?.map((footprint) => {
    let total = 0
    if (footprint.profile_id === location.state?.profile.id) {
      total = total + footprint?.carbon_grams
      transportArr.push(footprint.transport_mode)
    }
    return total
  })

  let totalGrams = gramsArray.length ?
    gramsArray?.reduce((a, b) => a + b)
    :
    "No Footprints"

  let totalTons = (totalGrams * 0.0000011023).toString().slice(0, 5)

  console.log(transportArr)

  return ( 
    <>
      <section>
        <h1>{location.state?.profile?.name}'s Footprint</h1>
        <h2>Total Footprint <br />{totalGrams} g / {totalTons} tons</h2>
        <br />
        <h2>Average Footprint <br /> {(totalGrams / gramsArray.length).toFixed(0)} g / footprint</h2>
        <br />
        <h2>Preferred Transportation <br />
          <img src={transportIcons[0]} alt="" />
        </h2>
      </section>
    </>
   );
}
 
export default ProfileDetails;