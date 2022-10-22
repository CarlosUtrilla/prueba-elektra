import { IRequest } from './interfaces';

export function Request<T>(props: IRequest = { body:{}, method :"GET"}): Promise<T> {
    const uri = "https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/carlos_utrilla"
    return fetch(uri, {
        method: props.method,
        ...(props.method !== "GET" &&
            { body: JSON.stringify(props.body) }
        )
    }).then(data => { return data.json() as T }).catch(() => { throw new Error })

}