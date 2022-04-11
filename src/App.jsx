import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import * as authService from './services/authService'
import * as footprintService from './services/footprintService'
import FootprintForm from './pages/Forms/FootprintForm'


const App = () => {
  const [footprints, setFootprints] = useState([])
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
  console.log(user)

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const addFootprint = async (footprintData) => {
    const footprint = await footprintService.create(footprintData)
    setFootprints([...footprints, footprint])
  }

  const updateFootprint = async (footprintData) => {
    const updatedFootprint = await footprintService.update(footprintData)
    setFootprints(footprints.map((footprint) => (
      footprint.id === updatedFootprint.id ? updatedFootprint : footprint
    )))
  }

  // const deleteFootprint = async (id) => {
  //   await footprintService.deleteFootprint(id)
  //   setFootprints(footprints.filter(footprint => footprint.id !== parseInt(id)))
  // }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route path="/footprints/new" element={<FootprintForm user={user} addFootprint={addFootprint}/>} />
        <Route path="footprints/:id/edit" element={<FootprintForm updateFootprint={updateFootprint} user={user}/>} />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  )
}

export default App
