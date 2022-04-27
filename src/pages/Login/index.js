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

function Login() {
  const { signIn } = useAuth()
  const navigate = useNavigate()
  const initialValues = {
    email: '',
    password: '',
  }
  const validationSchema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  })

  async function handleSubmit(values, actions) {
    console.log('🚀 ~ file: index.js ~ line 32 ~ handleSubmit ~ values', values)
    const { email, password } = values
    const { error } = await signIn({ email, password })

    if (error) {
      alert(`Error while signing in ${JSON.stringify(error, null, 2)}`)
    } else {
      navigate('/inbox')
    }
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Card>
        <Formik
          initialValues={initialValues}
          //   validationSchema={validationSchema}
          onSubmit={async (values, actions) =>
            await handleSubmit(values, actions)
          }
        >
          {({ values, isSubmitting }) => (
            <Form>
              <Grid container>
                <Grid item xs={12}>
                  <Field
                    name="email"
                    type="email"
                    label="Email"
                    component={TextField}
                  />
                  <ErrorMessage name="email" component={'div'} />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="password"
                    type="password"
                    component={TextField}
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
                      Login
                    </Button>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <p>
                    Don't have an account? <Link to="/signup">Sign Up</Link>
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

export default Login
