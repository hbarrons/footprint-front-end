import FootprintCard from "../../components/FootprintCard/FootPrintCard";
import './Footprints.css'


const Footprints = ({ footprints, user, transportIcons, greenTransportIcons }) => {

  let gramsArray = footprints?.map((footprint) => {
    let total = 0
    if (footprint.profile_id === user?.id) {
      total = total + parseInt(footprint?.carbon_grams)
    }
    return total
  })

  let totalGrams = gramsArray.length ?
    gramsArray?.reduce((a, b) => a + b)
    :
    ""

  let totalTons = (totalGrams * 0.0000011023).toString().slice(0, 5)
  console.log(totalGrams)
  console.log(typeof(gramsArray[0]))

  return ( 
    <>
      <br />
      <h1>Total Footprint </h1>
      <h3>{totalGrams} g / {totalTons} tons</h3>
      <br /><br />
      <h1>Average</h1>
      <h3>{(totalGrams / gramsArray.length).toFixed(0)} g / footprint</h3>
      <h3>Footprints</h3>
      <section className="footprints">
          <>
            {footprints.slice(0).reverse().map((footprint) => {
              if (footprint.profile_id === user?.id) {
                return <FootprintCard
                  footprint={footprint}
                  key={footprint.id}
                  transportIcons={transportIcons}
                  greenTransportIcons={greenTransportIcons}
                />
              }
              return null
            })}
          </>
      </section>
    </>
   );
}
 
export default Footprints;