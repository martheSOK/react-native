
import React, {createContext, ReactNode, useState} from "react";

const users={
    email: "",
    password: "",
    authotorities: "",
}


export const AuthContext = createContext();

export const AuthProvider = ({children}:{children : ReactNode}) => {
    const [dataUser , setDataUser] = useState(users);

    return (
        <AuthContext.Provider value={{ dataUser, setDataUser}}>
            {children}
        </AuthContext.Provider>

    );
}

