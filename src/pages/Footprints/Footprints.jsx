import FootprintCard from "../../components/FootprintCard/FootPrintCard";

const Footprints = ({ footprints }) => {
  return ( 
    <>
      <h1>Footprint List Here</h1>
      <section>
        {console.log(footprints)}
        {footprints.map((footprint) => (
          <FootprintCard 
            footprint={footprint}
            key={footprint.id}
          />
        ))}
      </section>
      {/* <FootprintCard /> */}
    </>
   );
}
 
export default Footprints;