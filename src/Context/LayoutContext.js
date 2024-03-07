import React, { createContext, useContext } from "react";
import Navbar from "../Global/Navbar";
import Footer from "../Global/Footer";

const LayoutContext = createContext();

export const LayoutProvider=({children})=>
{

    return(
        <>
        <LayoutContext.Provider>
            <Navbar/>
             {children}
        </LayoutContext.Provider>
        <Footer/>
        </>
        
    )
}

export const useLayoutContext=()=>useContext(LayoutContext)