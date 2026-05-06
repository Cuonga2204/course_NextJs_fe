// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import { Box } from '@mui/material'

type TProps = {
  children: ReactNode
}

const BlankLayout = ({ children }: TProps) => {
  return <Box sx={{ minHeight: '100vh' }}>{children}</Box>
}

export default BlankLayout
