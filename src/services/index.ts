import { cleanStrJson } from '../utils';
import { IRequest } from './interfaces';

export function Request<T>({ uri= "", body= {}, method= "GET" }: IRequest): Promise<T> {
    return fetch(uri, {
        method: method,
        ...(method !== "GET" &&
        {
            body: cleanStrJson(JSON.stringify(body)),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        )
    }).then(data => { return data.json() as T }).catch(() => { throw new Error })

}

