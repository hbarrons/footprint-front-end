import FootprintCard from "../../components/FootprintCard/FootPrintCard";
import './Footprints.css'


const Footprints = ({ footprints, user, transportIcons }) => {

  let gramsArray = footprints?.map((footprint) => {
    let total = 0
    if (footprint.profile_id === user?.id) {
      total = total + footprint?.carbon_grams
    }
    return total
  })

  let totalGrams = gramsArray.length ?
    gramsArray?.reduce((a, b) => a + b)
    :
    console.log("empty array")

  let totalTons = (totalGrams * 0.0000011023).toString().slice(0, 5)

  console.log(typeof(totalTons))

  return ( 
    <>
      <br />
      <h2>Total Footprint <br />{totalGrams} g / {totalTons} tons</h2>
      <br /><br />
      <h1>My Footprints</h1>
      <section className="footprints">
          <>
            {footprints.map((footprint) => {
              console.log(footprint.profile_id)
              if (footprint.profile_id === user?.id) {
                return <FootprintCard
                  footprint={footprint}
                  key={footprint.id}
                  transportIcons={transportIcons}
                />
              }
            })}
          </>
      </section>
    </>
   );
}
 
export default Footprints;