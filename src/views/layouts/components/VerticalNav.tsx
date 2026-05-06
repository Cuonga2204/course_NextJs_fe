// ** MUI Imports
import { Box, Divider, IconButton, List, ListItemButton, ListItemText, Typography } from '@mui/material'

// ** Next Imports
import { useRouter } from 'next/router'

// ** Component Imports
import Icon from 'src/components/Icon'

const NAV_ITEMS = [
  { label: 'Orders', path: '/orders' },
  { label: 'Customers', path: '/customers' },
  { label: 'Reports', path: '/reports' },
  { label: 'Integrations', path: '/integrations' }
]

const SAVED_REPORTS = [
  { label: 'Current month', path: '/reports/current-month' },
  { label: 'Last quarter', path: '/reports/last-quarter' },
  { label: 'Year-end sale', path: '/reports/year-end' }
]

const DRAWER_WIDTH = 240
const COLLAPSED_WIDTH = 48

type TProps = {
  collapsed: boolean
  onToggle: () => void
}

const VerticalNav = ({ collapsed, onToggle }: TProps) => {
  const router = useRouter()

  return (
    <Box
      component='nav'
      sx={{
        width: collapsed ? COLLAPSED_WIDTH : DRAWER_WIDTH,
        flexShrink: 0,
        overflow: 'hidden',
        borderRight: theme => `1px solid ${theme.palette.divider}`,
        bgcolor: 'background.paper',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        transition: theme =>
          theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.standard
          })
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: 1, py: 1 }}>
        <IconButton onClick={onToggle} size='small'>
          <Icon icon='tabler:menu-2' fontSize={20} />
        </IconButton>
      </Box>

      <List disablePadding sx={{ display: collapsed ? 'none' : 'block' }}>
        {NAV_ITEMS.map(item => (
          <ListItemButton
            key={item.path}
            selected={router.pathname === item.path}
            onClick={() => router.push(item.path)}
            sx={{
              py: 2,
              px: 3,
              '&.Mui-selected': {
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                '&:hover': { bgcolor: 'primary.dark' }
              }
            }}
          >
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{ variant: 'body1', fontWeight: 500, noWrap: true }}
            />
          </ListItemButton>
        ))}
      </List>

      <Divider sx={{ my: 1, display: collapsed ? 'none' : 'block' }} />

      <Box sx={{ px: 3, py: 1.5, display: collapsed ? 'none' : 'block' }}>
        <Typography variant='caption' color='text.secondary' fontWeight={700} letterSpacing={1.2} noWrap>
          SAVED REPORTS
        </Typography>
      </Box>

      <List disablePadding sx={{ display: collapsed ? 'none' : 'block' }}>
        {SAVED_REPORTS.map(item => (
          <ListItemButton
            key={item.path}
            selected={router.pathname === item.path}
            onClick={() => router.push(item.path)}
            sx={{ py: 2, px: 3 }}
          >
            <ListItemText primary={item.label} primaryTypographyProps={{ variant: 'body1', noWrap: true }} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  )
}

export default VerticalNav
