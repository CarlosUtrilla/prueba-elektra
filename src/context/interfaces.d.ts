export interface ISession{
    username?: string;
    password?: string;
    logged: boolean;
}

export interface AuthActions{
    [key: string]: any;
}

export interface AuthReducer{
    types: Types;
    action: ISession;
}

export interface AuthContext {
    logginState: ISession;
    login: (username: string, password: string) => boolean;
    logout: () => void;
}
