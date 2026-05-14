// ** Next Imports
import { NextPage } from 'next'
import Link from 'next/link'

// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import { Box, Button, Checkbox, Divider, FormControlLabel, IconButton, InputAdornment, Typography } from '@mui/material'

// ** Form Imports
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Validation Imports
import { loginSchema, TLoginSchema } from 'src/utils/validations/loginSchema'

// ** Component Imports
import CustomTextField from 'src/components/text-field'
import Icon from 'src/components/Icon'

// ** Styles
import { useLoginStyles } from './login.styles'
import { useAuth } from 'src/hooks/useAuth'

type TFormValues = TLoginSchema

type TProps = {}

const LoginPage: NextPage<TProps> = () => {
  const styles = useLoginStyles()
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const { login } = useAuth()
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<TFormValues>({
    defaultValues: { email: 'cuonga2242002@gmail.com', password: 'Cuong@123456' },
    resolver: yupResolver(loginSchema),
    mode: 'onBlur'
  })

  const onSubmit = (data: TFormValues) => {
    login({ ...data, rememberMe })
  }

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.card}>
        {/* Heading */}
        <Typography variant='h4' fontWeight={700} color='text.primary' mb={6}>
          Sign in
        </Typography>

        {/* Form */}
        <Box component='form' onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Email */}
          <Box mb={4}>
            <Controller
              name='email'
              control={control}
              render={({ field }) => (
                <CustomTextField
                  {...field}
                  fullWidth
                  label='Email'
                  placeholder='your@email.com'
                  error={Boolean(errors.email)}
                  helperText={errors.email?.message}
                />
              )}
            />
          </Box>

          {/* Password */}
          <Box mb={2}>
            <Controller
              name='password'
              control={control}
              render={({ field }) => (
                <CustomTextField
                  {...field}
                  fullWidth
                  label='Password'
                  placeholder='Enter password'
                  type={showPassword ? 'text' : 'password'}
                  error={Boolean(errors.password)}
                  helperText={errors.password?.message}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton edge='end' onClick={() => setShowPassword(prev => !prev)} tabIndex={-1}>
                          <Icon icon={showPassword ? 'tabler:eye' : 'tabler:eye-off'} fontSize={20} />
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              )}
            />
          </Box>

          {/* Remember me */}
          <FormControlLabel
            label='Remember me'
            sx={styles.rememberMe}
            control={<Checkbox size='small' checked={rememberMe} onChange={e => setRememberMe(e.target.checked)} />}
          />

          {/* Submit */}
          <Button type='submit' fullWidth variant='contained' size='large' sx={styles.submitBtn}>
            Sign in
          </Button>

          {/* Forgot password */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Link href='/forgot-password' style={styles.forgotPasswordLink}>
              <Typography variant='body2' fontWeight={600} component='span' sx={styles.forgotPasswordText}>
                Forgot your password?
              </Typography>
            </Link>
          </Box>

          {/* Divider */}
          <Divider sx={{ mb: 4 }}>
            <Typography variant='body2' color='text.secondary'>
              or
            </Typography>
          </Divider>

          {/* Google */}
          <Button
            fullWidth
            variant='outlined'
            size='large'
            sx={styles.googleBtn}
            startIcon={<Icon icon='flat-color-icons:google' fontSize={20} />}
          >
            Sign in with Google
          </Button>

          {/* Facebook */}
          <Button
            fullWidth
            variant='outlined'
            size='large'
            sx={styles.socialBtn}
            startIcon={<Icon icon='logos:facebook' fontSize={20} />}
          >
            Sign in with Facebook
          </Button>

          {/* Register link */}
          <Box sx={styles.registerRow}>
            <Typography variant='body2' color='text.secondary'>
              Don&apos;t have an account?
            </Typography>
            <Link href='/register'>
              <Typography variant='body2' color='primary' fontWeight={600}>
                Sign up
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default LoginPage
