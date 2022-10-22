import React, { useState, useEffect } from 'react'

import { EmployeesTable } from './components/employeesTable/EmployeesTable';
import { EmployeesForm } from './components/employeesForm/EmployeesForm';
import { getEmployees } from '../../services/employees';
import { IEmployee } from './interfaces';

import "./employees.scss"
export const Employees = () => {

  const [employeesList, setEmployeesList] = useState<IEmployee[]>([])

  useEffect(() => {
    if (employeesList.length <= 0) {
      getEmployees().then(data => setEmployeesList(data));
    }
  }, [])

  return (
    <div className='employees'>
      <div className='employees__view'>
        <EmployeesTable data={employeesList} />
        <div>
          <EmployeesForm />
        </div>
      </div>
    </div>
  )
}
