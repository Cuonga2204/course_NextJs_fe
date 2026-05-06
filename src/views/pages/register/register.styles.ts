import { useTheme } from '@mui/material'

export const useRegisterStyles = () => {
  const theme = useTheme()

  return {
    wrapper: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },

    card: {
      width: '100%',
      maxWidth: 420,
      backgroundColor: theme.palette.background.paper,
      borderRadius: 3,
      boxShadow: theme.shadows[3],
      p: 8
    },

    submitBtn: {
      borderRadius: 2,
      mb: 4
    },

    divider: {
      mb: 4
    },

    socialBtn: {
      borderRadius: 2,
      color: 'text.primary',
      borderColor: 'divider'
    },

    googleBtn: {
      borderRadius: 2,
      mb: 2,
      color: 'text.primary',
      borderColor: 'divider'
    },

    loginRow: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 1,
      mt: 6
    }
  }
}
