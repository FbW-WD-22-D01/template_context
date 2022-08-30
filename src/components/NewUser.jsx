import React, { useContext, useState } from 'react'
import { UsernameContext } from './context/usercontext'

function NewUser() {
  
  const [userInput, setUserInput] = useState('')
  const {setUsername} = useContext(UsernameContext)

  function handleSubmit(e){
    e.preventDefault()
    setUsername(userInput)
  }
  
  return (
    <div>
        <h2>Neuer User</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="Username">Username</label>
            <input onChange={(e) => setUserInput(e.target.value)} value={userInput} type="text" id="Username" />
            <input type="submit" />
        </form>
  
    </div>
  )
}

export default NewUser