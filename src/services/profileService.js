import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_API_URL}/api/auth/`

async function getAllProfiles() {
  const res = await fetch(BASE_URL, {
    method: "GET",
  })
  return await res.json()
}

export { getAllProfiles }
