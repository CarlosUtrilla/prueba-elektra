import React,{ useState, useEffect } from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material'
import { IEmployee } from '../../interfaces'
import moment from 'moment';
const ROWS_PER_PAGE = 10;
export const EmployeesTable = ({ data }: { data: IEmployee[] }) => {
  const [page, setPage] = useState(0)
  useEffect(() => {
    setPage(0)
  }, [data])
  
  return (
    <TableContainer component={Paper} className="employees__table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Apellido</TableCell>
            <TableCell align="right">Cumpleaños</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {data.slice(page * ROWS_PER_PAGE, (page + 1) * ROWS_PER_PAGE).map((row) => {
            return (
            <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    {row.id}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.last_name}</TableCell>
                <TableCell align="right">{(typeof row.birthday ===  "number" ? moment.utc(row.birthday): moment(row.birthday)).format("YYYY/MM/DD")}</TableCell>
            </TableRow>
            )
        })}
        </TableBody>
      </Table>
        <TablePagination
          component="div"
          rowsPerPageOptions={[10]}
          count={data.length}
          rowsPerPage={ROWS_PER_PAGE}
          page={page}
          onPageChange={(e, newPage)=>setPage(newPage)}
        />
    </TableContainer>
  )
}
