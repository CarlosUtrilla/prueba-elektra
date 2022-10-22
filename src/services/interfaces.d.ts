import { IEmployee } from "../pages/Employees/interfaces";

export interface IRequest {
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