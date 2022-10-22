import { IEmployee } from "../pages/Employees/interfaces";

export interface IRequest {
    uri:string;
    body?: object;
    method?: "GET" | "POST" | "PUT" | "DELETE";
}

export interface RESTEmployee {
    success: boolean;
    data?:    DataEmployees;
}


export interface DataEmployees {
    employees: IEmployee[];
}