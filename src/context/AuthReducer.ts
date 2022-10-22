import {types} from "./Types"
import { AuthActions, Session } from './interfaces';

export const AuthReducer = (state: Session, action: AuthActions): Session => {
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