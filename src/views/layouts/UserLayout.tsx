// ** React Imports
import { ReactNode, useState } from 'react'

// ** MUI Imports
import { Box } from '@mui/material'

// ** Components
import VerticalNav from './components/VerticalNav'
import HorizontalAppBar from './components/HorizontalAppBar'

type TProps = {
  children: ReactNode
}

const UserLayout = ({ children }: TProps) => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <VerticalNav collapsed={collapsed} onToggle={() => setCollapsed(prev => !prev)} />

      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
        <HorizontalAppBar />

        <Box component='main' sx={{ flex: 1, p: 4, bgcolor: 'background.default' }}>
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export default UserLayout
