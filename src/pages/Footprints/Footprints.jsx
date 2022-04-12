import FootprintCard from "../../components/FootprintCard/FootPrintCard";

const Footprints = ({ footprints, user }) => {

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
      <h1>My Footprints</h1>
      <h2>My Total Footprint: {totalGrams} grams / {totalTons} tons</h2>
      <section className="footprints">
          <>
          {console.log(user.id)}
          {console.log(footprints)}
            {footprints.map((footprint) => {
              console.log(footprint.profile_id)
              if (footprint.profile_id === user?.id) {
                return <FootprintCard
                  footprint={footprint}
                  key={footprint.id}
                />
              }
            })}
          </>
      </section>
    </>
   );
}
 
export default Footprints;