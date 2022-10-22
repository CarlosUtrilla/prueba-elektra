import { createContext } from "react";
import { AuthContext as AuthContextInterface} from "./interfaces";

export const AuthContext = createContext({} as AuthContextInterface)