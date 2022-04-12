import { Link } from "react-router-dom";


const ProfileCard = ({ profile, footprints }) => {

  let gramsArray = footprints?.map((footprint) => {
    let total = 0
    if (footprint.profile_id === profile?.profile.id) {
      total = total + footprint?.carbon_grams
    }
    return total
  })

  let totalGrams = gramsArray.length ?
    gramsArray?.reduce((a, b) => a + b)
    :
    "No Footprints"

  let totalTons = (totalGrams * 0.0000011023).toString().slice(0, 5)

  return ( 
    <Link to={`/profiles/${profile.profile.id}`} state={profile} >
      <div className="card">
        <h1 className="card-title">{profile.profile.name}</h1>
        <h5>Total Footprint</h5>
        <p>{totalGrams} g / {totalTons} tons</p>
        <h5>Average</h5>
        <p>{(totalGrams / gramsArray.length).toFixed(0)} g / footprint</p>
      </div>
    </Link>
   );
}
 
export default ProfileCard;