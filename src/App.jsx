import  { Suspense ,lazy,useContext,useState} from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
const NavBar=lazy(()=> import('./components/NavBar'))


function App() {


  return (
    <><BrowserRouter>
   <NavBar/>
    <Routes>
      <Route path="/alltodos" element={<Suspense fallback={"loading..."}>Here all todos shown</Suspense>} />
      <Route path="/" element={<Suspense fallback={"loading..."}>Home Page Brother</Suspense>} />
      <Route path="/calender" element={<Suspense fallback={"loading..."}>Calender Shown here</Suspense>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
