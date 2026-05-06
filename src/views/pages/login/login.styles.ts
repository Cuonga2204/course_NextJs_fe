import { useTheme } from '@mui/material'

export const useLoginStyles = () => {
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

    rememberMe: {
      mb: 4
    },

    submitBtn: {
      borderRadius: 2,
      mb: 4
    },

    forgotPasswordLink: {
      color: theme.palette.text.primary
    },

    forgotPasswordText: {
      textDecoration: 'underline'
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

    registerRow: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 1,
      mt: 6
    }
  }
}
