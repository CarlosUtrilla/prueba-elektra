import {  useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { AuthReducer } from './AuthReducer';
import { types } from "./Types"
import { generateID } from '../utils';

const init = () => {
    const user = JSON.parse(sessionStorage.getItem('session')!)
    return {
        logged: Boolean(user),
        ...user
    }
}

const AuthProvider = ({ children }: {children: React.ReactNode}) => {

    const [state, dispatch] = useReducer(AuthReducer, { logged: false }, init)
    const login = (username: string, password: string) => {
        if (username === "user_12" && password === "123456") {
            const token = generateID()
            dispatch({
                type: types.login,
                token
            })
            sessionStorage.setItem('session', JSON.stringify(token));
            return true;
        }
        return false;
    }
    const logout = () => {
        dispatch({
            type: types.logout
        })
        sessionStorage.removeItem('session')
    }
    return (
        <AuthContext.Provider value={{
            logginState: state,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
