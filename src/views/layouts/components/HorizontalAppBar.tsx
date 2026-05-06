// ** MUI Imports
import { AppBar, Avatar, Badge, Box, IconButton, Toolbar, Typography } from '@mui/material'

// ** Next Imports
import { useRouter } from 'next/router'

// ** Component Imports
import Icon from 'src/components/Icon'

const PAGE_TITLE_MAP: Record<string, string> = {
  '/': 'Dashboard',
  '/orders': 'Orders',
  '/customers': 'Customers',
  '/reports': 'Reports',
  '/integrations': 'Integrations'
}

type TProps = {
  onToggle: () => void
}

const HorizontalAppBar = ({ onToggle }: TProps) => {
  const router = useRouter()
  const title = PAGE_TITLE_MAP[router.pathname] ?? 'Dashboard'

  return (
    <AppBar position='static' elevation={0} sx={{ bgcolor: 'primary.main' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton onClick={onToggle} sx={{ color: 'inherit' }}>
            <Icon icon='tabler:menu-2' fontSize={22} />
          </IconButton>

          <Typography variant='h6' fontWeight={600} color='inherit'>
            {title}
          </Typography>
        </Box>

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
