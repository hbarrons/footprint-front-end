import FootprintCard from "../../components/FootprintCard/FootPrintCard";

const Footprints = ({ footprints, user }) => {
  return ( 
    <>
      <h1>My Footprints</h1>
      <section>
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
        




        {/* {footprints.map((footprint) => (
          <FootprintCard 
            footprint={footprint}
            key={footprint.id}
          />
        ))} */}
      </section>
    </>
   );
}
 
export default Footprints;