import {types} from "./Types"
import { AuthActions, ISession } from './interfaces';

export const AuthReducer = (state: ISession, action: AuthActions): ISession => {
    switch (action.type) {
        case types.login:
            return {
                logged: true,
                token: action.token
            }
        case types.logout:
            return {
                logged: false
            }
        default:
            return state
    }
}