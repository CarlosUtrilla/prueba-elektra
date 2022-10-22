

export interface IEmployee {
    id:        number;
    name:      string;
    last_name: string;
    birthday:  number | moment.Moment | null;
}
export type IEmployeeWithoutId = Omit<IEmployee, "id">