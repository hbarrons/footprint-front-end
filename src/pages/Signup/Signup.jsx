import { useState } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import styles from './Signup.module.css'

const Signup = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className={styles.container}>
      <div className='card signup'>
        <h1>Sign Up</h1>
        <p>{message}</p>
        <SignupForm {...props} updateMessage={updateMessage} />
      </div>
    </main>
  )
}

export default Signup
