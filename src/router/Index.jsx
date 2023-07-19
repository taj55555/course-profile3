import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Error";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";



const Index = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
      
    </BrowserRouter>
  </>
  )
}

export default Index
