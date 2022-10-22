import { Request } from "."
import { RESTEmployee } from './interfaces';
import { IEmployee } from '../pages/Employees/interfaces';

export const getEmployees = () => {
    return new Promise<IEmployee[]>(resolve => {
        Request<RESTEmployee>().then(data => {
            console.log(data)
            if (data.success) {
                resolve(data?.data?.employees!)
            } else {
                resolve([])
            }
        }).catch(err => {
            resolve([])
            console.error(err)
        })
    })
}


export const setEmployee=(data: IEmployee) => {
    return Request({body:data, method:"POST"})
}