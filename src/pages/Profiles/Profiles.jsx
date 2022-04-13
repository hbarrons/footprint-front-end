import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import './Profiles.css'
import { useLocation } from 'react-router-dom'

const Profiles = ({ profiles, footprints }) => {

  return (
    <>
      <br />
      <h1>See How Your Footprint Compares!</h1>
      <section className='profiles'>
        {profiles?.length ? 
          <>
            {profiles?.map(profile=>
              <ProfileCard 
                profile={profile}
                key={profile.profile.id}
                footprints={footprints}
              />
            )}
          </>
        :
          <p>No profiles yet</p>
        }
      </section>
    </>
  )
}
 
export default Profiles