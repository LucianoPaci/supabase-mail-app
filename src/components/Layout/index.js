import Box from '@mui/material/Box'
import styled from '@mui/material/styles/styled'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../Header'
import Drawer from '../Drawer'
function Layout() {
  const [open, setOpen] = useState(false)
  const toggleNavigation = () => setOpen((status) => !status)

  return (
    <LayoutWrapper>
      <Box component={'header'} sx={{ border: '1px solid black' }}>
        <Header toggleNavigation={toggleNavigation} />
      </Box>
      <Box
        component={'main'}
        sx={{ flexGrow: 1, p: 3, border: '1px solid green' }}
      >
        <p>Main</p>
        <Outlet />
      </Box>
      <Box component={'footer'} sx={{ border: '1px solid red' }}>
        <p>Footer</p>
      </Box>
      {/* <Drawer /> */}
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled('div')`
  min-height: 100vh;
`

export default Layout
