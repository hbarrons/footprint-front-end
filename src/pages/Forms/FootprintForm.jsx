import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
// import '../../styles/Form.css'

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
    id ? props.updateCat(form) : props.addFootprint(form)
    navigate(`/cats`)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }



  // useEffect(() => {
  //   const fetchOne = async () => {
  //     const data = await getOne(id)
  //     setForm({
  //       id: data.footprint.id,
  //       start: data.footprint.id,
  //       stop: data.footprint.id,
  //       transportation: data.footprint.id,
  //       passengers: data.footprint.id
  //     })
  //   }
  //   id && fetchOne()
  //   return () => setForm({})
  // }, [id])

  return (
    <>
      <div className="page-header">
        {id
          ? <h1>Edit Footprint</h1>
          : <><h1>Add Footprint</h1></>
        }
      </div>

      <section className="form-container">
        <form onSubmit={handleSubmit}>
          <FootprintInput form={form} handleChange={handleChange} />
          <button type="submit" className="btn submit">Submit!</button>
        </form>
      </section>
    </>
  )
}

export default CatForm