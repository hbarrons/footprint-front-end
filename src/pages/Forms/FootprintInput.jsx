const FootprintInput = ({ form, handleChange }) => {
  return (
    <>
      <label htmlFor="start">Start (zip code):</label>
      <input
        value={form?.start ? form?.start : ''} onChange={handleChange} id="start"
        required name="start" type="number" placeholder="Start" autoComplete="off"
      />
      <label htmlFor="stop">Stop (zip code):</label>
      <input
        value={form?.stop ? form?.stop : ''} onChange={handleChange} id="stop"
        required name="stop" type="number" placeholder="Stop" autoComplete="off"
      />
      <label htmlFor="transport-type">Transportation Type:</label>
      <select name="transport-type">
        <option value="driving">Driving</option>
        <option value="walking">Walking</option>
        <option value="cycling">Bike</option>
        <option value="e-bike">Electric Bike/Scooter</option>
      </select>
      <label htmlFor="numPassengers">Number of Passengers:</label>
      <input
        value={form?.numPassengers ? form?.numPassengers : ''} onChange={handleChange} id="numPassengers"
        required name="numPassengers" type="number" placeholder="Age" autoComplete="off"
      />
    </>
  )
}

export default FootprintInput