import React, { useState } from 'react'
import { EmployeesForm } from '../employeesForm/EmployeesForm'
import "./addNewEmployee.scss"
import { IEmployeeWithoutId } from '../../interfaces';
import { setEmployee } from '../../../../services/employees';

export const AddNewEmployee = ({ onSuccess }: { onSuccess: () => void }) => {
    const [error, setError] = useState(false)
    const handleSubmit = (employee: IEmployeeWithoutId) => {
        setEmployee(employee).then((data) => {
            if (data.success) { 
                onSuccess()
            } else {
                setError(true)
            }
        })
    }
  return (
      <div className='add-modal'>
          <h2>Ingrese los datos del nuevo empleado</h2>
          {
              error &&
              <p>Algo salio mal al intentar agregar un nuevo empleado, intentelo de nuevo mas tarde.</p>
          }
          <EmployeesForm onSubmit={handleSubmit} textButton='Agregar empleado' activeValidate/>
    </div>
  )
}
