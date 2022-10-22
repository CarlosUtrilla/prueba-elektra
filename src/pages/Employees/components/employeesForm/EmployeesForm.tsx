import React from 'react'
import { Formik } from 'formik';
import { IEmployeeWithoutId } from '../../interfaces';
import TextField from '@mui/material/TextField';
import { DatePicker } from '../../../../components/DatePicker/DatePicker';
import moment from 'moment';
import "./employeesForm.scss"

export const EmployeesForm = () => {
    const handleSubmit = (employee: IEmployeeWithoutId) => {
        
    }
  return (
    <div className='form'>
          <Formik
              onSubmit={handleSubmit}
              initialValues={{
                  birthday: moment().utc(),
                  last_name: "",
                  name: ""
              }}
          >
              {({ handleChange, handleSubmit, values }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                        label="Nombre"
                        name="name"
                        fullWidth
                        className='input'
                        onChange={handleChange}
                      />
                    <TextField
                        label="Apellidos"
                        name="last_name"
                        fullWidth
                        className='input'
                        onChange={handleChange}
                      />
                    <DatePicker
                        label="Cumpleaños"
                        name="birthday"
                        format="YYYY/MM/DD"
                        value={values.birthday}
                        fullWidth
                        className='input'
                        onChange={handleChange}
                      />
                  </form>
                )
              }
          </Formik>
    </div>
  )
}
