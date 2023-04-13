import { useState, createContext, useEffect, useMemo } from "react";

export const sessionContext = createContext();

export default function SessionProvider({children}){

    const [ login, setLogin ] = useState(false);

    const sessionInfos = useMemo( () => JSON.parse(localStorage.getItem('userSession')),[login])

    const [ session, setSession ] = useState(sessionInfos);

    useEffect( () => {

        setSession(sessionInfos);

    },[login]);

    return (
        <sessionContext.Provider value={{session,setLogin}}>
            {children}
        </sessionContext.Provider>
    )

}