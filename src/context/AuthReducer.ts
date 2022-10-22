import {types} from "./Types"
import { AuthActions, ISession } from './interfaces';

export const AuthReducer = (state: ISession, action: AuthActions): ISession => {
    switch (action.type) {
        case types.login:
            return {
                logged: true,
                username: action.username,
                password: action.password,
            }
        case types.logout:
            return {
                logged: false
            }
        default:
            return state
    }
}