import React, { useState, useEffect } from 'react'
import { Alert, Button, Snackbar } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import moment from 'moment';


import { EmployeesTable } from './components/employeesTable/EmployeesTable';
import { EmployeesForm } from './components/employeesForm/EmployeesForm';
import { getEmployees } from '../../services/employees';
import { IEmployee, IEmployeeWithoutId } from './interfaces';

import { normalizeString } from '../../utils';
import "./employees.scss"
import Modal from '@mui/material/Modal';
import { AddNewEmployee } from './components/addNewEmployee/AddNewEmployee';
export const Employees = () => {
  const [employeesList, setEmployeesList] = useState<IEmployee[]>([])
  const [employeesListWithFilter, setEmployeesListWithFilter] = useState<IEmployee[]>([])
  const [openModal, setOpenModal] = useState(false)
  const [openAlert, setOpenAlert] = useState(false)

  useEffect(() => {
    if (employeesList.length <= 0) {
      handleGetEmployees();
    }
  }, [])

  const handleGetEmployees = () => { 
      getEmployees().then(data => setEmployeesList(data));
  }

  const applyFilters = (filters: IEmployeeWithoutId) => {
    const newFilter = employeesList.filter((c) =>
      (filters.birthday && moment(c.birthday).isSame( moment(filters.birthday), "date")) ||
      (filters.name && normalizeString(c.name).includes(normalizeString(filters.name))) ||
      (filters.last_name && normalizeString(c.last_name).includes(normalizeString(filters.last_name)))
    )
    setEmployeesListWithFilter(newFilter)
    if (newFilter.length <= 0) {
      setOpenAlert(true)
    }
  }
  const onSuccess = () => {
    handleGetEmployees()
    setOpenModal(false);
  }
  return (
    <div className='employees'>
      <div className='employees__view'>
        <EmployeesTable data={employeesListWithFilter.length > 0 ? employeesListWithFilter: employeesList} />
        <div className='employees__filter'>
          <h3>Filtrar empleados por:</h3>
          <EmployeesForm onSubmit={applyFilters} textButton="Aplicar filtros"/>
          <Button fullWidth color='secondary' variant='contained' endIcon={<AddCircleIcon />} onClick={()=>setOpenModal(true)}>
            Agregar Nuevo empleado
          </Button>
        </div>
      </div>
      <Modal
          open={openModal}
          onClose={()=>setOpenModal(false)}
      >
        <div>
          <AddNewEmployee onSuccess={onSuccess} />
        </div>
      </Modal>
      <Snackbar  anchorOrigin={{ vertical:"top", horizontal: "center" }} open={openAlert} autoHideDuration={4000} onClose={() => setOpenAlert(false)}>
            <Alert onClose={() => setOpenAlert(false)} severity={"warning"} sx={{ width: '100%' }}>
                No se encontraron resultados del filtro aplicado
            </Alert>
      </Snackbar>
    </div>
  )
}
