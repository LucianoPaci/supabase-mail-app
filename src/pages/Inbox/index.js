import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/Auth'

function Inbox() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  async function handleSignOut() {
    await signOut()
    navigate('/login')
  }
  return (
    <div>
      <h1>Inbox</h1>
      <h4>Welcome {user?.email}</h4>
      <div>
        <Button onClick={handleSignOut}>Sign Out</Button>
      </div>
    </div>
  )
}

export default Inbox
