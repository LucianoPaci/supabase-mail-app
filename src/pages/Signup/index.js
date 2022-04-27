import React from 'react'
import * as yup from 'yup'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { CircularProgress, Grid } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/Auth'
import { TextField } from 'formik-mui'

const StyledTextField = (props) => <TextField fullWidth {...props} />

function Signup() {
  const { signUp } = useAuth()
  const navigate = useNavigate()

  const initialValues = {
    email: '',
    password: '',
  }
  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(6, 'Password should be of minimum 6 characters length')
      .required('Password is required'),
  })

  async function handleSubmit(values, actions) {
    const { email, password } = values
    const { error } = await signUp({ email, password })

    if (error) {
      alert('Error while signing up')
    } else {
      navigate('/login')
    }
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Card>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, actions) =>
            await handleSubmit(values, actions)
          }
        >
          {({ isSubmitting }) => (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12} sx={{ margin: 4 }}>
                  <Field
                    name="email"
                    type="email"
                    label="Email"
                    component={StyledTextField}
                  />
                  <ErrorMessage name="email" component={'div'} />
                </Grid>
                <Grid item xs={12} sx={{ margin: 4 }}>
                  <Field
                    name="password"
                    type="password"
                    component={StyledTextField}
                    label="Password"
                  />
                  <ErrorMessage name="password" component={'div'} />
                </Grid>

                <Grid item xs={12}>
                  {isSubmitting ? (
                    <CircularProgress size={20} />
                  ) : (
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={isSubmitting}
                    >
                      Signup
                    </Button>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <p>
                    Already have an account? <Link to="/login">Login</Link>
                  </p>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Card>
    </Box>
  )
}

export default Signup
