import { useEffect, useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { AuthReducer } from './AuthReducer';
import { types } from "./Types"

const init = () => {
    const user = JSON.parse(localStorage.getItem('session')!)
    console.log("user", user)
    return {
        logged: Boolean(user),
        ...user
    }
}

const AuthProvider = ({ children }: {children: React.ReactNode}) => {

    const [state, dispatch] = useReducer(AuthReducer, { logged: false }, init)
    const login = (username: string, password: string) => {
        if (username === "user_12" && password === "123456") {
            const user = {
                username,
                password
            }
            dispatch({
                type: types.login,
                ...user
            })
            localStorage.setItem('session', JSON.stringify(user));
            return true;
        }
        return false;
    }
    const logout = () => {
        dispatch({
            type: types.logout
        })
        localStorage.removeItem('session')
    }
    useEffect(() => {
        console.log(state)
    },[state])
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
