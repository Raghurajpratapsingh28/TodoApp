import  { Suspense ,lazy,useContext,useState} from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import HomePage from './components/HomePage'
import Important from './components/Important'
import AllTodos from './components/AllTodos'
import Calender from './components/Calender'
import { GlobalProvider } from './Context/GlobalState'
import NavBar from './components/NavBar'



function App() {


  return (
    <>
    <GlobalProvider>
    <BrowserRouter>
   <NavBar/>
    <Routes>
      <Route path="/alltodos" element={<Suspense fallback={"loading..."}><AllTodos/></Suspense>} />
      <Route path="/" element={<Suspense fallback={"loading..."}><HomePage/></Suspense>} />
      <Route path="/calender" element={<Suspense fallback={"loading..."}><Calender/></Suspense>} />
      <Route path="/importantTodos" element={<Suspense fallback={"loading..."}><Important/></Suspense>} />
      
      
    </Routes>
    </BrowserRouter>
    </GlobalProvider>
    </>
  )
}

export default App
