import React, { createContext, useContext } from "react";
import Navbar from "../Global/Navbar";

const LayoutContext = createContext();

export const LayoutProvider=({children})=>
{

    return(
        <>
        <LayoutContext.Provider>
            <Navbar/>
             {children}
        </LayoutContext.Provider>
        </>
        
    )
}

export const useLayoutContext=()=>useContext(LayoutContext)