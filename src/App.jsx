import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import * as authService from './services/authService'
import * as footprintService from './services/footprintService'
import FootprintForm from './pages/Forms/FootprintForm'
import Footprints from './pages/Footprints/Footprints'
import FootprintDetails from './pages/FootprintDetails/FootprintDetails'

//styles
import './styles/index.css'
import ProfileDetails from './pages/ProfileDetails/ProfileDetails'

//Image Assets
import Bike from './assets/bike.png'
import Walk from './assets/walking.png'
import Scooter from './assets/scooter.png'
import Car from './assets/car.png'


const App = () => {
  const [footprints, setFootprints] = useState([])
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
  console.log(user)

  //icons
  const transportIcons = [Bike, Walk, Scooter, Car]

  //useEffects
  useEffect(() => {
    const fetchData = async () => {
      const data = await footprintService.getAll()
      setFootprints(data)
    }
    fetchData()
  }, [])

  //auth
  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  //footprints
  const addFootprint = async (footprintData) => {
    console.log("new data:", footprintData)
    const footprint = await footprintService.create(footprintData)
    setFootprints([...footprints, footprint])
  }

  const updateFootprint = async (footprintData) => {
    console.log("updated data:", footprintData)
    // const updatedFootprint = await footprintService.update(footprintData)
    // setFootprints(footprints.map((footprint) => (
    //   footprint.id === updatedFootprint.id ? updatedFootprint : footprint
    // )))
  }

  const deleteFootprint = async (id) => {
    await footprintService.deleteFootprint(id)
    setFootprints(footprints.filter(footprint => footprint.id !== parseInt(id)))
    navigate('/footprints')
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route path="/footprints" element={<Footprints footprints={footprints} user={user} transportIcons={transportIcons}/>} />
        <Route path="/footprints/new" element={<FootprintForm user={user} addFootprint={addFootprint}/>} />
        <Route path="/footprints/:id" element={<FootprintDetails deleteFootprint={deleteFootprint}/>} />
        <Route path="footprints/:id/edit" element={<FootprintForm updateFootprint={updateFootprint} user={user}/>} />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route path="/profiles/:id" element={<ProfileDetails />}/>
      </Routes>
    </>
  )
}

export default App
