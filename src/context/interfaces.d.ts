export interface Session{
    username?: string;
    password?: string;
    logged: boolean;
}

export interface AuthActions{
    [key: string]: any;
}

export interface AuthReducer{
    types: Types;
    action: Session;
}

export interface AuthContext {
    logginState: Session;
    login: (username: string, password: string) => boolean;
    logout: () => void;
}
