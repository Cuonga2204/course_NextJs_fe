// ** React Imports
import { ReactNode } from 'react'

// ** Next Imports
import { NextPage } from 'next'

// ** Views
import LoginPage from 'src/views/pages/login'

// ** Layouts
import BlankLayout from 'src/views/layouts/BlankLayout'

type TProps = {}

const Login: NextPage<TProps> = () => {
  return <LoginPage />
}

Login.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>
Login.guestGuard = true
export default Login
