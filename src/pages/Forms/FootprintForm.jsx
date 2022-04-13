import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './FootprintForm.css'

// Services


// Components
import FootprintInput from './FootprintInput'


const FootprintForm = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
		// Conditionally call upon appropriate function
    id ? props.updateFootprint(form, id) : props.addFootprint(form)
    navigate(`/footprints`)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className="page-header">
        {id
          ? <h1 className='addedit-fp'>Edit Footprint</h1>
          : <><h1 className='addedit-fp'>Add Footprint</h1></>
        }
      </div>

      <section className="form-container">
        <form onSubmit={handleSubmit}>
          <FootprintInput form={form} handleChange={handleChange} />
          <button type="submit" className="btn btn-success">Submit!</button>
        </form>
      </section>
    </>
  )
}

export default FootprintForm