import React from 'react'
import { Route, Routes } from 'react-router'
import Homepage from '../Pages/Homepage'

const Router = () => {
  return (
   <>
   <Routes>
    <Route path='/' element={<Homepage/>}/>
   </Routes>
   </>
  )
}

export default Router