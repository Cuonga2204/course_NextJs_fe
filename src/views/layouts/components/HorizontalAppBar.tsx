// ** MUI Imports
import { AppBar, Avatar, Badge, Box, Toolbar, Typography } from '@mui/material'

// ** Next Imports
import { useRouter } from 'next/router'

const PAGE_TITLE_MAP: Record<string, string> = {
  '/': 'Dashboard',
  '/orders': 'Orders',
  '/customers': 'Customers',
  '/reports': 'Reports',
  '/integrations': 'Integrations'
}

const HorizontalAppBar = () => {
  const router = useRouter()
  const title = PAGE_TITLE_MAP[router.pathname] ?? 'Dashboard'

  return (
    <AppBar position='static' elevation={0} sx={{ bgcolor: 'primary.main' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant='h6' fontWeight={600} color='inherit'>
          {title}
        </Typography>

        <Badge badgeContent={4} color='error'>
          <Avatar sx={{ width: 34, height: 34, bgcolor: 'primary.dark', fontSize: 14, cursor: 'pointer' }}>
            U
          </Avatar>
        </Badge>
      </Toolbar>
    </AppBar>
  )
}

export default HorizontalAppBar
