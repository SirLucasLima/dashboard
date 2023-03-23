import { BrowserRouter, Routes, Route, } from "react-router-dom"

import { Home } from "../pages/home/Home"
import { Portofolio } from "../pages/portofolio/Portofolio"

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/portofolio" element={<Portofolio />}/>
      </Routes>
    </BrowserRouter>
  )
}