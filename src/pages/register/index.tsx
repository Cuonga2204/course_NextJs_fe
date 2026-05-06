// ** React Imports
import { ReactNode } from 'react'

// ** Next Imports
import { NextPage } from 'next'

// ** Views
import RegisterPage from 'src/views/pages/register'

// ** Layouts
import BlankLayout from 'src/views/layouts/BlankLayout'

type TProps = {}

const Register: NextPage<TProps> = () => {
  return <RegisterPage />
}

Register.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default Register
