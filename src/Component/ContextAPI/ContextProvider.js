import React, { useState } from "react";
import {UserContext} from "./Context";

export const UserContextProvider = ({children}) => {
    const [data1, setData1] = useState([])
    const [number, setNumber] = useState()
 
    
    return(
        <UserContext.Provider value={{data1, setData1, number, setNumber}}>
        {children}
        </UserContext.Provider>
    )
}

