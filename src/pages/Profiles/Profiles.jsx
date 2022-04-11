import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
  }, [])

  return (
    <>
    {console.log("profiles: ",profiles)}
      <h1>How does your footprint compare to others?</h1>
      {profiles.length ? 
        <>
          {profiles.forEach(profile=>
            <h1 key={profile._id}>{profile.name}</h1>
          )}
        </>
      :
        <p>No profiles yet</p>
      }
    </>
  )
}
 
export default Profiles