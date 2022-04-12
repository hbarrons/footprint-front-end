const FootprintInput = ({ form, handleChange }) => {
  return (
    <>
      <label htmlFor="start">Start (zip code):</label>
      <input
        value={form?.start ? form?.start : ''} onChange={handleChange} id="start"
        required name="start" type="text" placeholder="Start" autoComplete="off"
      />
      <label htmlFor="stop">Stop (zip code):</label>
      <input
        value={form?.stop ? form?.stop : ''} onChange={handleChange} id="stop"
        required name="stop" type="text" placeholder="Stop" autoComplete="off"
      />
      <label htmlFor="transport_mode">Transportation Type:</label>
      <select name="transport_mode" onChange={handleChange} id="transport-type">
      <option>--Please Make Selection--</option>
        <option value="driving">Driving</option>
        <option value="walking">Walking</option>
        <option value="cycling">Bike</option>
        <option value="e-bike">Electric Bike/Scooter</option>
      </select>
      <label htmlFor="numPassengers">Number of Passengers:</label>
      <input
        value={form?.numPassengers ? form?.numPassengers : ''} onChange={handleChange} id="numPassengers"
        required name="numPassengers" type="number"autoComplete="off"
      />
    </>
  )
}

export default FootprintInput