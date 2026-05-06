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
import { registerSchema, TRegisterSchema } from 'src/utils/validations/registerSchema'

// ** Component Imports
import CustomTextField from 'src/components/text-field'
import Icon from 'src/components/Icon'

// ** Styles
import { useRegisterStyles } from './register.styles'

type TFormValues = TRegisterSchema

type TProps = {}

const RegisterPage: NextPage<TProps> = () => {
  const styles = useRegisterStyles()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [agreeTerms, setAgreeTerms] = useState(false)

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<TFormValues>({
    defaultValues: { email: '', password: '', confirmPassword: '' },
    resolver: yupResolver(registerSchema),
    mode: 'onBlur'
  })

  const onSubmit = (data: TFormValues) => {
    console.log('register data', data)
  }

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.card}>
        {/* Heading */}
        <Typography variant='h4' fontWeight={700} color='text.primary' mb={2}>
          Create an account
        </Typography>
        <Typography variant='body2' color='text.secondary' mb={6}>
          Fill in the details below to get started
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
          <Box mb={4}>
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

          {/* Confirm Password */}
          <Box mb={2}>
            <Controller
              name='confirmPassword'
              control={control}
              render={({ field }) => (
                <CustomTextField
                  {...field}
                  fullWidth
                  label='Confirm Password'
                  placeholder='Re-enter password'
                  type={showConfirmPassword ? 'text' : 'password'}
                  error={Boolean(errors.confirmPassword)}
                  helperText={errors.confirmPassword?.message}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton edge='end' onClick={() => setShowConfirmPassword(prev => !prev)} tabIndex={-1}>
                          <Icon icon={showConfirmPassword ? 'tabler:eye' : 'tabler:eye-off'} fontSize={20} />
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              )}
            />
          </Box>

          {/* Agree terms */}
          <FormControlLabel
            sx={{ mb: 4 }}
            label={
              <Typography variant='body2'>
                I agree to the{' '}
                <Link href='/terms'>
                  <Typography variant='body2' component='span' color='primary' fontWeight={600}>
                    Terms & Conditions
                  </Typography>
                </Link>
              </Typography>
            }
            control={
              <Checkbox size='small' checked={agreeTerms} onChange={e => setAgreeTerms(e.target.checked)} />
            }
          />

          {/* Submit */}
          <Button
            type='submit'
            fullWidth
            variant='contained'
            size='large'
            disabled={!agreeTerms}
            sx={styles.submitBtn}
          >
            Create account
          </Button>

          {/* Divider */}
          <Divider sx={styles.divider}>
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
            Sign up with Google
          </Button>

          {/* Facebook */}
          <Button
            fullWidth
            variant='outlined'
            size='large'
            sx={styles.socialBtn}
            startIcon={<Icon icon='logos:facebook' fontSize={20} />}
          >
            Sign up with Facebook
          </Button>

          {/* Login link */}
          <Box sx={styles.loginRow}>
            <Typography variant='body2' color='text.secondary'>
              Already have an account?
            </Typography>
            <Link href='/login'>
              <Typography variant='body2' color='primary' fontWeight={600}>
                Sign in
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default RegisterPage
