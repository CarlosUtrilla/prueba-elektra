import React, { useContext, useEffect, useState } from 'react'
import { TextField, Button } from '@mui/material';
import { Formik } from "formik"
//Style
import "./login.scss"
import { AuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';

export const Login = () => {
    const { login } = useContext(AuthContext);

    const [errorLoggin, setErrorLoggin] = useState(false);

    const history = useHistory()

    const handleSubmit = (values: Account) => {
        const isLoggin = login(values.username, values.password);
        if (isLoggin) {
            setErrorLoggin(false)
            history.replace("/employees")
        } else {
            setErrorLoggin(true)
        }
    }
    const validate = (values:Account) => {
        const errors: {[key:string]: string} = {}
        if (!values.username) {
            errors.username = "Por favor ingresa un usuario."
        }
        if (values.password.length < 6) {
            errors.password = "Por favor ingresa una contraseña mayor a 6 digitos."
        }
        return errors;
    }

    const handlePrevent = (e:React.SyntheticEvent) => {
        e.preventDefault()
    }
  return (
      <div className='login'>
          <Formik
              onSubmit={handleSubmit}
              validate={validate}
              initialValues={{
                                username: "",
                                password: "",
                            }}
          >
              {({handleChange, handleBlur,handleSubmit, values, errors}) => (
                  <form className='login__container' onSubmit={handleSubmit}>
                  <h2>Inicio de sesión</h2>
                  <span className={errorLoggin ? "error": ""}>{errorLoggin? "Los datos ingresados son incorrectos": "Ingrese sus datos para inciar sesión"}</span>
                      <TextField
                          variant="filled"
                          name='username'
                          label="Usuario"
                          className='input'
                          value={values.username}
                          onChange={handleChange}
                          onCopy={handlePrevent}
                          onPaste={handlePrevent}
                          onBlur={handleBlur}
                          error={Boolean(errors.username)}
                          helperText={errors.username}
                      />
                      <TextField
                          variant="filled"
                          name='password'
                          label="Contraseña"
                          type="password"
                          className='input'
                          value={values.password}
                          onChange={handleChange}
                          onCopy={handlePrevent}
                          onPaste={handlePrevent}
                          onBlur={handleBlur}
                          error={Boolean(errors.password)}
                          helperText={errors.password}
                      />
                  <Button type='submit' variant="contained" fullWidth size='large'>
                      Iniciar sesión
                  </Button>
                  </form>
              )}
          </Formik>
    </div>
  )
}
