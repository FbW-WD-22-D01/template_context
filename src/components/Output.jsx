import React, { useContext } from 'react'
import { UsernameContext } from './context/usercontext'

function Output() {
  
const {username} = useContext(UsernameContext) 

  return (
    <h3>Mein Name ist: {username} </h3>
  )
}

export default Output