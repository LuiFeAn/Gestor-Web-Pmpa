import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { sessionContext }from '../contexts/Session';

export default function RequireAuth({children}){

    const { session } = useContext(sessionContext);

    if( session ){

        return (
            <>  
                {children}
            </>
        )

    }else{

        return (
            <Navigate to='/login'/>
        )

    }
 
}