import React from 'react'
import { Formik } from 'formik';
import { IEmployeeWithoutId } from '../../interfaces';
import TextField from '@mui/material/TextField';
import { DatePicker } from '../../../../components/DatePicker/DatePicker';
import moment from 'moment';
import "./employeesForm.scss"
import { Button } from '@mui/material';

interface IEmployeeForm{
  onSubmit: (employe: IEmployeeWithoutId) => void;
  textButton: string;
  activeValidate?: boolean;
}

export const EmployeesForm = ({ onSubmit, textButton, activeValidate }: IEmployeeForm) => {
   const validate = (values:IEmployeeWithoutId) => {
     const errors: { [key: string]: string } = {}
        if (!activeValidate) {
          return errors
        }
        if (!values.name) {
          errors.name = "El nombre es obligatorio."
        } else if (values.name.length > 30) {
          errors.name = "El nombre no puede contener mas de 30 caracteres."
        }
        if (!values.last_name) {
          errors.last_name = "El apellido es obligatorio."
        } else if (values.last_name.length > 30) {
          errors.last_name = "El apellido no puede contener mas de 30 caracteres."
        }
        if(!values.birthday){
          errors.birthday = "La fecha de nacimiento es obligatorio."
        } else if (!moment(values.birthday).isValid() || moment(values.birthday).isAfter()) {
          errors.birthday = "La fecha o el formato son invalidos."
        }
        return errors;
    }
  return (
    <div className='form'>
          <Formik
              onSubmit={onSubmit}
              initialValues={{
                        birthday: null,
                        last_name: "",
                        name: ""
              }}
              validate={validate}
          >
              {({ handleChange, handleSubmit, values, errors}) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                        label="Nombre"
                        name="name"
                        fullWidth
                        className='input'
                        onChange={handleChange}
                        variant="filled"
                        error={Boolean(errors.name)}
                        helperText={errors.name}
                      />
                    <TextField
                        label="Apellidos"
                        name="last_name"
                        fullWidth
                        className='input'
                        onChange={handleChange}
                        variant="filled"
                        error={Boolean(errors.last_name)}
                        helperText={errors.last_name}
                      />
                    <DatePicker
                        label="Cumpleaños"
                        name="birthday"
                        format="YYYY/MM/DD"
                        value={values.birthday}
                        fullWidth
                        className='input'
                        onChange={handleChange}
                        error={Boolean(errors.birthday)}
                        helperText={errors.birthday}
                      />
                      <Button variant='contained' fullWidth type='submit'>
                        {textButton || "Enviar"}
                      </Button>
                  </form>
                )
              }
          </Formik>
    </div>
  )
}
