import { useLocation } from "react-router-dom";

const ProfileDetails = ({ footprints, transportIcons }) => {
  let location = useLocation()

  let gramsArray = footprints?.map((footprint) => {
    let total = 0
    if (footprint.profile_id === location.state?.profile.id) {
      total = total + footprint?.carbon_grams
    }
    return total
  })

  let totalGrams = gramsArray.length ?
    gramsArray?.reduce((a, b) => a + b)
    :
    console.log("empty array")

  let totalTons = (totalGrams * 0.0000011023).toString().slice(0, 5)

  console.log(totalGrams)

  // let idx = footprint?.transport_mode === 'walking' ? 1 : footprint?.transport_mode === 'e-bike' ? 2 : footprint?.transport_mode === 'driving' ? 3 : footprint?.transport_mode === 'cycling' ? 0 : ""

  return ( 
    <>
      <section>
        <h1>{location.state?.profile?.name}'s Footprint</h1>
        <h2>Total Footprint <br />{totalGrams} g / {totalTons} tons</h2>
        <br />
        <h2>Average Footprint <br /> {(totalGrams / gramsArray.length).toFixed(0)} g / footprint</h2>
        <br />
        <h2>Preferred Transportation <br />
          <img src="" alt="" />
        </h2>
      </section>
    </>
   );
}
 
export default ProfileDetails;