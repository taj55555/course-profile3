import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Error";
import Home from "../pages/Home";
import Profile from "../pages/Profile/Profile";



const Index = () => {
  return (
    <>
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />

        <Route path="*" element={<Error/>} />
       
      </Routes>
      
    </BrowserRouter>
  </>
  )
}

export default Index
