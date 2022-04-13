import * as tokenService from './tokenService'


const BASE_URL = `${process.env.REACT_APP_API_URL}/api/footprints/`

export const create = async (footprint) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(footprint)
    })
    return await res.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getAll = async () => {
  try {
    const res = await fetch(BASE_URL, {
      method: "GET",
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${tokenService.getToken()}`
      },
    })
    return await res.json()
  } catch (error) {
    throw error
  }
}

export const deleteFootprint = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}delete/${id}`, {
      method: "DELETE",
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${tokenService.getToken()}`
      },
    })
    return await res.json()
  } catch (error) {
    throw error
  }
}

export const update = async (footprint, id) => {
  try {
    const res = await fetch (`${BASE_URL}update/${id}`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(footprint)
    })
    console.log("response data", res)
    return await res.json()
  } catch (error) {
    throw error
  }
}