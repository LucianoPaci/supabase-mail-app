import {
  AppBar,
  Toolbar,
  styled,
  Box,
  IconButton,
  Button,
  Avatar,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import React, { useState } from 'react'
import { Search } from './Search'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import NotificationsIcon from '@mui/icons-material/Notifications'
import AppsIcon from '@mui/icons-material/Apps'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/Auth'
import AccountMenu from './AccountMenu'

export const Header = ({ toggleNavigation }) => {
  const navigate = useNavigate()
  const { signOut, user } = useAuth()
  async function handleSignOut() {
    await signOut()
    navigate('/login')
  }

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <HamburgerButton onToggleNavigation={toggleNavigation} />

          <Title styles={{ flexGrow: 1 }} />
          <Box sx={{ flexGrow: 2 }}>
            <Search />
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <IconButton>
              <HelpOutlineIcon />
            </IconButton>
            <IconButton>
              <NotificationsIcon />
            </IconButton>
            <IconButton>
              <AppsIcon />
            </IconButton>
            <AccountMenu onSignOut={handleSignOut} user={user} />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

const Title = ({ styles }) => {
  return (
    <Box sx={styles}>
      <Button>
        <img
          alt="gmail-logo"
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
        />
      </Button>
    </Box>
  )
}
const HamburgerButton = ({ onToggleNavigation }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
    onToggleNavigation()
  }

  return (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
      onClick={handleToggle}
    >
      <MenuIcon />
    </IconButton>
  )
}
