import { Request } from "."
import { RESTEmployee } from './interfaces';
import { IEmployee, IEmployeeWithoutId } from '../pages/Employees/interfaces';
import moment from 'moment';

export const getEmployees = () => {
    return new Promise<IEmployee[]>(resolve => {
        Request<RESTEmployee>().then(data => {
            if (data.success) {
                const employees = data.data?.employees.map(e => ({
                    ...e,
                    birthday: moment.utc(e.birthday)
                })) || []
                resolve(employees)
            } else {
                resolve([])
            }
        }).catch(err => {
            resolve([])
            console.error(err)
        })
    })
}


export const setEmployee=(data: IEmployeeWithoutId) => {
    return Request<{success:boolean, data: string}>({body:data, method:"POST"})
}