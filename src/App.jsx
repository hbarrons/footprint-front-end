import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import * as authService from './services/authService'
import * as footprintService from './services/footprintService'
import * as profileService from './services/profileService'
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
import BikeGreen from './assets/bikegreen.png'
import WalkGreen from './assets/walkinggreen.png'
import ScooterGreen from './assets/scootergreen.png'
import CarGreen from './assets/cargreen.png'


const App = () => {
  const [footprints, setFootprints] = useState([])
  const [profiles, setProfiles] = useState([])
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  //icons
  const transportIcons = [Bike, Walk, Scooter, Car]
  const greenTransportIcons = [BikeGreen, WalkGreen, ScooterGreen, CarGreen]
  
  //useEffects
  useEffect(() => {
    const fetchData = async () => {
      const data = await footprintService.getAll()
      setFootprints(data)
    }
    fetchData()
  }, [])

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
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
    const footprint = await footprintService.create(footprintData)
    setFootprints([...footprints, footprint])
  }

  const updateFootprint = async (footprintData, id) => {
    const updatedFootprint = await footprintService.update(footprintData, id)
    console.log("footprintData", footprintData)
    console.log("id", id)
    console.log(updatedFootprint)
    setFootprints(footprints.map((footprint) => (
      footprint.id === parseInt(id) ? updatedFootprint : footprint
      )))
      console.log("footprints: ", footprints)
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
        <Route path="/footprints" element={<Footprints footprints={footprints} user={user} transportIcons={transportIcons} greenTransportIcons={greenTransportIcons}/>} />
        <Route path="/footprints/new" element={<FootprintForm user={user} addFootprint={addFootprint}/>} />
        <Route path="/footprints/:id" element={<FootprintDetails deleteFootprint={deleteFootprint} transportIcons={transportIcons}/>} />
        <Route path="footprints/:id/edit" element={<FootprintForm updateFootprint={updateFootprint} user={user}/>} />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles profiles={profiles} footprints={footprints}/> : <Navigate to="/login" />}
        />
        <Route path="/profiles/:id" element={<ProfileDetails footprints={footprints} transportIcons={transportIcons}/>}/>
      </Routes>
    </>
  )
}

export default App
