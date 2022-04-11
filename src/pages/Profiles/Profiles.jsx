import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import ProfileCard from '../../components/ProfileCard/ProfileCard'

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
      {profiles?.length ? 
        <>
          {profiles?.map(profile=>
            <ProfileCard 
              profile={profile}
              key={profile.profile.id}
            />
          )}
        </>
      :
        <p>No profiles yet</p>
      }
    </>
  )
}
 
export default Profiles