import { useRef } from 'react'
import { useEffect } from 'react'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  FieldError,
  Submit,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  // focus on jle box on page load
  const jleRef = useRef(null)
  useEffect(() => {
    jleRef.current?.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await signUp({
      username: data.jle,
      password: data.wolvesDragons11,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      // user is signed in automatically
      toast.success('Welcome!')
    }
  }

  return (
    <>
      <MetaTags title="Signup" />

      <main className="rw-main">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="rw-scaffold rw-login-container">
          <div className="rw-segment">
            <header className="rw-segment-header">
              <h2 className="rw-heading rw-heading-secondary">Signup</h2>
            </header>

            <div className="rw-segment-main">
              <div className="rw-form-wrapper">
                <Form onSubmit={onSubmit} className="rw-form-wrapper">
                  <Label
                    name="jle"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Jle
                  </Label>
                  <TextField
                    name="jle"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    ref={jleRef}
                    validation={{
                      required: {
                        value: true,
                        message: 'Jle is required',
                      },
                    }}
                  />

                  <FieldError name="jle" className="rw-field-error" />

                  <Label
                    name="wolvesDragons11"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Wolves&dragons11
                  </Label>
                  <PasswordField
                    name="wolvesDragons11"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    autoComplete="current-password"
                    validation={{
                      required: {
                        value: true,
                        message: 'Wolves&dragons11 is required',
                      },
                    }}
                  />

                  <FieldError
                    name="wolvesDragons11"
                    className="rw-field-error"
                  />

                  <div className="rw-button-group">
                    <Submit className="rw-button rw-button-blue">
                      Sign Up
                    </Submit>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div className="rw-login-link">
            <span>Already have an account?</span>{' '}
            <Link to={routes.login()} className="rw-link">
              Log in!
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default SignupPage
